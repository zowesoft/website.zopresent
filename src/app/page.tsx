import Link from "next/link";
import { features, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-28">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            {site.org} presents
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Scripture First. <span className="text-gold">Always.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            One operator runs scripture, songs, media and themes from a studio
            window while the audience display shows exactly what is on air.
            Fully offline, including AI scripture detection.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/download"
              className="rounded-lg bg-gold px-6 py-3 font-semibold text-gold-ink transition-colors hover:bg-gold/90"
            >
              Download {site.releaseTag}
            </Link>
            <a
              href={site.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-6 py-3 font-semibold text-ink transition-colors hover:bg-surface-2"
            >
              View on GitHub
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Windows · macOS · Linux — free, no account, no internet required
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Built for the service, not the internet
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-gold-dim"
            >
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offline highlight */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-3 sm:px-6">
          {[
            {
              stat: "100%",
              label: "Offline",
              body: "Detection, lookup and playback all run on-device. No audio or text ever leaves the machine.",
            },
            {
              stat: "<50 ms",
              label: "Reference lookups",
              body: "Verse references answer in single-digit milliseconds, enforced by a benchmark in CI.",
            },
            {
              stat: "0",
              label: "Bundled translations",
              body: "You install the texts you're licensed to use — nothing copyrighted ships with the app.",
            },
          ].map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-4xl font-bold text-gold">{s.stat}</p>
              <p className="mt-2 font-medium">{s.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Ready for Sunday?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Grab the package for your platform and run your first service in
          minutes. Five packages, one tag, built on native runners.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/download"
            className="rounded-lg bg-gold px-6 py-3 font-semibold text-gold-ink transition-colors hover:bg-gold/90"
          >
            Get {site.releaseTag}
          </Link>
          <Link
            href="/docs/getting-started"
            className="rounded-lg border border-border px-6 py-3 font-semibold text-ink transition-colors hover:bg-surface-2"
          >
            Read the docs
          </Link>
        </div>
      </section>
    </>
  );
}
