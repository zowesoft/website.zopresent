import fs from "node:fs";
import path from "node:path";

// The docs live as plain markdown files in content/docs/ so they can be read
// by humans in the repo, by editors, and by AI tools (a raw endpoint serves
// each file verbatim). Frontmatter is deliberately tiny: five flat keys.

export type DocSection = "Getting started" | "Features" | "Troubleshooting" | "Advanced";

export const docSections: DocSection[] = [
  "Getting started",
  "Features",
  "Troubleshooting",
  "Advanced",
];

export type Doc = {
  slug: string;
  title: string;
  summary: string;
  section: DocSection;
  order: number;
  /** The markdown body, without frontmatter. */
  body: string;
};

const docsDir = path.join(process.cwd(), "content", "docs");

function parseDoc(file: string): Doc | null {
  const raw = fs.readFileSync(path.join(docsDir, file), "utf8");
  const match = /^---\n([\s\S]*?)\n---\n?/.exec(raw);
  if (!match) return null;

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^"|"$/g, "");
    if (key) meta[key] = value;
  }

  return {
    // Filenames are NN-slug.md; the number only orders them on disk.
    slug: file.replace(/^\d+-/, "").replace(/\.md$/, ""),
    title: meta.title ?? file,
    summary: meta.summary ?? "",
    section: (meta.section as Doc["section"]) ?? "Advanced",
    order: Number(meta.order ?? 99),
    body: raw.slice(match[0].length),
  };
}

function loadDocs(): Doc[] {
  try {
    return fs
      .readdirSync(docsDir)
      .filter((f) => f.endsWith(".md"))
      .map(parseDoc)
      .filter((d): d is Doc => d !== null)
      .sort(
        (a, b) =>
          docSections.indexOf(a.section) - docSections.indexOf(b.section) ||
          a.order - b.order,
      );
  } catch {
    return [];
  }
}

export const docs: Doc[] = loadDocs();

export function getDoc(slug: string): Doc | undefined {
  return docs.find((d) => d.slug === slug);
}

/** Docs grouped by section, in sidebar order. */
export function docsBySection(): Array<{ section: DocSection; docs: Doc[] }> {
  return docSections
    .map((section) => ({ section, docs: docs.filter((d) => d.section === section) }))
    .filter((group) => group.docs.length > 0);
}
