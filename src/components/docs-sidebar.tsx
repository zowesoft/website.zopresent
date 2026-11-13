"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type SidebarGroup = {
  section: string;
  docs: Array<{ slug: string; title: string }>;
};

// Client component so the active guide can highlight from the pathname.
// The groups arrive as plain props: the docs loader reads markdown with
// node:fs and must stay server-only.
export function DocsSidebar({ groups }: { groups: SidebarGroup[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation" className="text-sm">
      {groups.map(({ section, docs }) => (
        <div key={section} className="mb-7">
          <p className="text-[11px] font-medium uppercase tracking-widest text-amber">
            {section}
          </p>
          <ul className="mt-2.5 space-y-px border-l border-border">
            {docs.map((d) => {
              const active = pathname === `/docs/${d.slug}`;
              return (
                <li key={d.slug}>
                  <Link
                    href={`/docs/${d.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={`-ml-px block border-l-2 py-1.5 pl-3.5 transition-colors ${
                      active
                        ? "border-blue font-medium text-ink"
                        : "border-transparent text-muted hover:border-border hover:text-ink"
                    }`}
                  >
                    {d.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <div className="mb-7">
        <p className="text-[11px] font-medium uppercase tracking-widest text-amber">
          For AI tools
        </p>
        <ul className="mt-2.5 space-y-px border-l border-border">
          <li>
            <a
              href="/llms.txt"
              className="-ml-px block border-l-2 border-transparent py-1.5 pl-3.5 text-muted transition-colors hover:border-border hover:text-ink"
            >
              llms.txt index
            </a>
          </li>
          <li>
            <span className="-ml-px block border-l-2 border-transparent py-1.5 pl-3.5 text-muted">
              <code className="text-[11.5px]">/docs/&lt;guide&gt;/markdown</code>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
