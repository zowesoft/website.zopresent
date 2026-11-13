import type { Metadata } from "next";
import Link from "next/link";
import { docsBySection } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "User guide for Zopresent: installation, your first service, scripture detection, the Bible library, songs, media, themes, troubleshooting, shortcuts, settings and building from source.",
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Everything you need to run Zopresent in a service, from first install
        to building it yourself.
      </p>

      {docsBySection().map(({ section, docs }) => (
        <section key={section} className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-amber">
            {section}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {docs.map((d) => (
              <Link
                key={d.slug}
                href={`/docs/${d.slug}`}
                className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-blue"
              >
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {d.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-14 border-t border-border pt-8">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Reading these docs with AI tools
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Every guide is written in plain markdown and served raw, so
          assistants and AI editors can read the manual directly instead of
          scraping rendered pages.
        </p>
        <ul className="mt-4 space-y-1 text-sm">
          <li>
            <code className="text-ink">/llms.txt</code> — the index of all
            guides, in the{" "}
            <a
              href="https://llmstxt.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue transition-colors hover:text-blue-hover"
            >
              llms.txt
            </a>{" "}
            convention
          </li>
          <li>
            <code className="text-ink">/docs/&lt;guide&gt;/markdown</code> —
            any guide as raw markdown
          </li>
        </ul>
      </section>
    </div>
  );
}
