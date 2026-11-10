import type { Metadata } from "next";
import { screenshots } from "@/lib/content";

export const metadata: Metadata = {
  title: "Screenshots",
  description:
    "A look at Zowe Worship: the studio window, audience display, detection card, theme editor and media transport.",
};

export default function ScreenshotsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight">Screenshots</h1>
      <p className="mt-4 max-w-2xl text-muted">
        The operator&apos;s view and the audience&apos;s view, side by side.
        Real captures are being prepared — each frame below shows what will
        appear there.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((s, i) => (
          <figure
            key={s.slug}
            className={
              i === 0
                ? "sm:col-span-2 lg:col-span-2"
                : ""
            }
          >
            {/* Placeholder frame — replace with <Image> when captures land */}
            <div
              aria-hidden
              className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-border bg-surface"
            >
              <div className="text-center">
                <p className="text-sm font-medium text-amber">
                  {s.title}
                </p>
                <p className="mt-1 text-xs text-muted">screenshot coming soon</p>
              </div>
            </div>
            <figcaption className="mt-3">
              <p className="font-medium">{s.title}</p>
              <p className="mt-1 text-sm text-muted">{s.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-10 rounded-lg border border-border bg-surface p-4 text-sm text-muted">
        Want to help? If you run Zowe Worship and can capture the studio
        window or audience display, open an issue on{" "}
        <a
          href="https://github.com/zowesoft/zowe-worship"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue hover:text-blue-hover"
        >
          GitHub
        </a>{" "}
        and we&apos;ll feature it here.
      </p>
    </div>
  );
}
