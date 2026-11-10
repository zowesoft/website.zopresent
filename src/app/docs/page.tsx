import type { Metadata } from "next";
import Link from "next/link";
import { docs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "User guide for Zowe Worship: getting started, Bible translations, shortcuts, building from source, and FAQ.",
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Everything you need to run Zowe Worship in a service, from first
        install to building it yourself.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {docs.map((d) => (
          <Link
            key={d.slug}
            href={`/docs/${d.slug}`}
            className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-blue"
          >
            <h2 className="font-semibold">{d.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {d.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
