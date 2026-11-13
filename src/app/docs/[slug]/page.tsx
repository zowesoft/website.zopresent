import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { docs, getDoc } from "@/lib/docs";

export function generateStaticParams() {
  return docs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(
  props: PageProps<"/docs/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const doc = getDoc(slug);
  if (!doc) return { title: "Not found" };
  return { title: doc.title, description: doc.summary };
}

export default async function DocPage(props: PageProps<"/docs/[slug]">) {
  const { slug } = await props.params;
  const doc = getDoc(slug);
  if (!doc) notFound();

  // Neighbours in reading order, across section boundaries, like a book.
  const index = docs.findIndex((d) => d.slug === doc.slug);
  const prev = index > 0 ? docs[index - 1] : null;
  const next = index < docs.length - 1 ? docs[index + 1] : null;

  return (
    <div className="py-16">
      <nav className="text-sm text-muted">
        <Link href="/docs" className="hover:text-ink">
          Docs
        </Link>
        <span aria-hidden className="mx-2">
          /
        </span>
        <span>{doc.section}</span>
        <span aria-hidden className="mx-2">
          /
        </span>
        <span className="text-ink">{doc.title}</span>
        <a
          href={`/docs/${doc.slug}/markdown`}
          className="ml-4 text-xs text-muted transition-colors hover:text-ink"
          title="This page as raw markdown"
        >
          markdown
        </a>
      </nav>

      <article className="prose-zopresent prose-lg mt-8 max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.body}</ReactMarkdown>
      </article>

      {/* Reading order: the previous and next guide in the manual */}
      <nav
        aria-label="Reading order"
        className="mt-14 grid gap-3 border-t border-border pt-8 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            href={`/docs/${prev.slug}`}
            className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-blue"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              ← Previous
            </p>
            <p className="mt-1.5 font-semibold text-ink">{prev.title}</p>
            <p className="mt-0.5 text-xs text-muted">
              {prev.section} · {prev.summary}
            </p>
          </Link>
        ) : (
          <span aria-hidden className="hidden sm:block" />
        )}
        {next && (
          <Link
            href={`/docs/${next.slug}`}
            className="group rounded-xl border border-border bg-surface p-5 text-right transition-colors hover:border-blue sm:col-start-2"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Next →
            </p>
            <p className="mt-1.5 font-semibold text-ink">{next.title}</p>
            <p className="mt-0.5 text-xs text-muted">
              {next.section} · {next.summary}
            </p>
          </Link>
        )}
      </nav>
    </div>
  );
}
