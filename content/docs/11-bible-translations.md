---
title: "Bible library"
summary: "Install the translations you are licensed to use — the app ships none."
section: "Features"
order: 2
---

# Bible library

Zopresent ships with **no Bible text**. Translations are copyrighted works
and redistribution requires the publisher's permission — so nothing
copyrighted is bundled, and you install the copies your church holds
licenses for. The public-domain King James Version is pre-registered.

## Installing a translation

Import a translation from a JSON dataset with the command-line importer:

```sh
go run ./cmd/bible-import \
  -source /path/to/NIV_bible.json \
  -id niv -name "New International Version" -abbr NIV \
  -license "Copyrighted" \
  -attribution "Holy Bible, New International Version, NIV. Copyright 1973, 1978, 1984, 2011 by Biblica, Inc."
```

The importer:

- **verifies the dataset is complete** — all 66 books — and refuses partial
  text rather than install a translation with holes in it,
- prints the copyright holder as a notice for restricted translations,
- records the license and attribution line, which **Settings → Bible**
  displays beside the translation.

Installed translations show in **Settings → Bible** with their verse count,
attribution and license. Pick the **default translation** there — the one
detection lookups and scripture entries use.

## Working with scripture in the service

- **Reference entry** — type `Jn 3:16`, `John 3:16-18` or
  `Philippians chapter 4` and jump straight to the passage.
- **Search** — find verses by word, phrase or prefix.
- **Ranges** — a reference like `John 3:16-18` loads the whole range and
  splits into slides according to your
  [slides setting](/docs/settings-reference#scripture-slides).

One keystroke airs the top search result when you are in a hurry.

## Speed

Lookup speed is a feature, not an accident. Reference lookups answer in
single-digit milliseconds, and the targets are enforced by a benchmark that
runs in CI (`cmd/bible-bench`):

| Workload | Target |
|---|---|
| Reference lookups | p95 under 50 ms |
| Full-text search | p95 under 150 ms |

A build that regresses below these targets fails — so the promise in this
doc is checked on every commit.

## Licensing, briefly

- **KJV** is public domain and pre-registered in the app.
- **Copyrighted translations** (NIV, ESV, NKJV, and others) may be imported
  for use by licensees. The importer records your attribution line, but
  obtaining the license is between your church and the publisher — Zopresent
  cannot grant it.
- The licence terms of each installed translation are displayed in Settings
  so the person running the desk can always see them.
