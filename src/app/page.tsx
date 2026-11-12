import Link from "next/link";
import Image from "next/image";
import { features, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber to-transparent"
        />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
          <Image
            src="/brand/zopresent.png"
            alt="Zopresent"
            width={112}
            height={112}
            priority
            className="mx-auto h-24 w-24 drop-shadow-[0_0_44px_rgba(71,120,255,0.4)] sm:h-28 sm:w-28"
          />
          <p className="mt-6 text-sm font-medium uppercase tracking-widest text-amber">
            {site.org} presents
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Scripture First. <span className="text-amber">Always.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            One operator runs scripture, songs, media and themes from a studio
            window while the audience display shows exactly what is on air.
            Fully offline, including AI scripture detection.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/download"
              className="rounded-lg bg-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-hover"
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
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-blue"
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
              <p className="text-4xl font-bold text-amber">{s.stat}</p>
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
            className="rounded-lg bg-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-hover"
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

      {/* Support */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-amber">
            Support the project
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Keep the lights on
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Zopresent is free for your church to use, and a handful of sponsors
            covers what it takes to keep it going — the domain today, the
            certificates that sign the builds one day. If it serves you well,
            you can keep it going too.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/sponsors/theJohnCode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-border bg-surface-2 px-6 py-3 font-semibold text-ink transition-colors hover:border-blue hover:text-ink"
            >
              <svg
                aria-hidden
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#F472B6"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 4.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Sponsor on GitHub
            </a>
            <a
              href="https://buymeacoffee.com/thejohncode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-border px-6 py-3 font-semibold text-ink transition-colors hover:bg-surface-2"
            >
              Buy me a coffee
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
