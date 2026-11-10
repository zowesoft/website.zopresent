import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <nav className="text-sm text-muted">
        <Link href="/blog" className="hover:text-ink">
          Blog
        </Link>
        <span aria-hidden className="mx-2">
          /
        </span>
        <span className="text-ink">{post.title}</span>
      </nav>

      <article className="prose-zowe prose-lg mt-8 max-w-none">
        <header>
          <time
            dateTime={post.date}
            className="text-sm text-muted"
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            {post.title}
          </h1>
        </header>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </article>
    </div>
  );
}
