import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/zopresent.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-[7px] ring-1 ring-white/10"
            />
            <p className="font-semibold">{site.name}</p>
          </div>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            Scripture-first worship presentation for a single operator and one
            audience display. Fully offline.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-fit text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm text-muted">
          <a
            href={site.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue transition-colors hover:text-blue-hover"
          >
            GitHub
          </a>
          <p className="mt-3 leading-relaxed">
            Copyright © 2026 {site.org}. All rights reserved. Source-available
            licence; see the LICENSE file in the repository.
          </p>
          <p className="mt-2 leading-relaxed">
            Bible translations remain subject to their copyright holders.
          </p>
        </div>
      </div>
    </footer>
  );
}
