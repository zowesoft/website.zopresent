import Link from "next/link";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-md bg-blue font-bold text-white"
          >
            Z
          </span>
          <span>{site.name}</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/download"
            className="ml-2 hidden rounded-md bg-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-hover sm:block"
          >
            Download
          </Link>
        </nav>
      </div>
    </header>
  );
}
