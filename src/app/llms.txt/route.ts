import { docs, docSections } from "@/lib/docs";
import { site } from "@/lib/content";

// Prerendered at build; llms.txt is the emerging convention for telling AI
// tools what is worth reading on a site: https://llmstxt.org
export function GET() {
  const base = "https://zopresent.vercel.app";
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Zopresent is built by ${site.org} and is free for churches. Source code: ${site.repo}`,
    "",
    "## Product",
    "",
    `- [Download](${base}/download): installers for Windows, macOS and Linux (deb, rpm, AppImage).`,
    `- [Screenshots](${base}/screenshots): the studio, the audience display and the detection queue.`,
    `- [Release notes](${base}/blog): what shipped and when.`,
    "",
  ];

  for (const section of docSections) {
    const group = docs.filter((d) => d.section === section);
    if (group.length === 0) continue;
    lines.push(`## ${section}`, "");
    for (const doc of group) {
      lines.push(
        `- [${doc.title}](${base}/docs/${doc.slug}/markdown): ${doc.summary}`,
      );
    }
    lines.push("");
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
