import type { ReactNode } from "react";
import { docsBySection } from "@/lib/docs";
import { DocsSidebar } from "@/components/docs-sidebar";

// Shared docs chrome: a sticky section sidebar on large screens, plain
// single-column content below it. The index page and every guide render
// inside the content column.
export default function DocsLayout({ children }: { children: ReactNode }) {
  const groups = docsBySection().map(({ section, docs }) => ({
    section,
    docs: docs.map((d) => ({ slug: d.slug, title: d.title })),
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[230px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-10 max-h-[calc(100vh-5rem)] overflow-y-auto py-16 pr-2">
            <DocsSidebar groups={groups} />
          </div>
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
