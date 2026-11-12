import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { docs } from "@/lib/content";

export function generateStaticParams() {
  return docs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(
  props: PageProps<"/docs/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const doc = docs.find((d) => d.slug === slug);
  if (!doc) return { title: "Not found" };
  return { title: doc.title, description: doc.summary };
}

export default async function DocPage(props: PageProps<"/docs/[slug]">) {
  const { slug } = await props.params;
  const doc = docs.find((d) => d.slug === slug);
  if (!doc) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <nav className="text-sm text-muted">
        <Link href="/docs" className="hover:text-ink">
          Docs
        </Link>
        <span aria-hidden className="mx-2">
          /
        </span>
        <span className="text-ink">{doc.title}</span>
      </nav>

      <article className="prose-zopresent prose-lg mt-8 max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.body}</ReactMarkdown>
      </article>

      {/* On-page index of the other guides */}
      <nav className="mt-14 border-t border-border pt-8">
        <p className="text-sm font-medium uppercase tracking-widest text-muted">
          All guides
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {docs
            .filter((d) => d.slug !== doc.slug)
            .map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/docs/${d.slug}`}
                  className="block rounded-lg border border-border bg-surface px-4 py-3 text-sm transition-colors hover:border-blue"
                >
                  <span className="font-medium">{d.title}</span>
                  <span className="mt-1 block text-muted">{d.summary}</span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
