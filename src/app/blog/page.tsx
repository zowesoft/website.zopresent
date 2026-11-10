import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Release notes and news from the Zowe Worship project.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
      <p className="mt-4 text-muted">
        Release notes and news from the project.
      </p>

      <div className="mt-10 space-y-6">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block rounded-xl border border-border bg-surface p-6 transition-colors hover:border-gold-dim"
          >
            <time dateTime={p.date} className="text-sm text-muted">
              {new Date(p.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {p.excerpt}
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-gold">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
