import type { Metadata } from "next";
import Link from "next/link";
import { downloads, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Zowe Worship v0.1.0 for Windows, macOS or Linux. Five packages, fully offline, no account required.",
};

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">
        Download {site.releaseTag}
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Pick your platform. Every package includes the offline speech engine,
        so scripture detection works on first run — no download, no account,
        no internet required.
      </p>

      <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-surface">
        {downloads.map((d) => (
          <div
            key={d.id}
            className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-semibold">{d.platform}</p>
              <p className="mt-1 text-sm text-muted">
                {d.package} · {d.file} · {d.size}
              </p>
              <p className="mt-0.5 text-xs text-muted">{d.detail}</p>
            </div>
            <a
              href={d.href}
              className="shrink-0 rounded-lg bg-gold px-5 py-2.5 text-center text-sm font-semibold text-gold-ink transition-colors hover:bg-gold/90"
            >
              Download
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <div className="rounded-lg border border-border bg-surface p-5">
          <h2 className="font-semibold">First-run warnings</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Packages are currently <strong className="text-ink">unsigned</strong>.
            On Windows, SmartScreen will ask for confirmation — choose
            &ldquo;More info&rdquo; then &ldquo;Run anyway&rdquo;. On macOS,
            right-click the app and choose &ldquo;Open&rdquo;. Code signing is
            planned for a coming release.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-5">
          <h2 className="font-semibold">No Bible text included</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Translations are copyrighted, so the app ships with none. Install
            the texts you&apos;re licensed to use with the command-line
            importer — see the{" "}
            <Link
              href="/docs/bible-translations"
              className="text-gold hover:text-gold/80"
            >
              Bible translations guide
            </Link>
            .
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-5">
          <h2 className="font-semibold">All releases</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Looking for an older build or the raw artifacts? Everything lives
            on the{" "}
            <a
              href={site.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80"
            >
              GitHub releases page
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
