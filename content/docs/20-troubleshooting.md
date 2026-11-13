---
title: "Troubleshooting"
summary: "Audio not detected, accuracy problems, display issues, and the data questions."
section: "Troubleshooting"
order: 1
---

# Troubleshooting

## Audio not detected

The queue stays empty even though someone is reading scripture aloud.

1. **Is the detector listening?** Press **F8** — or check for the Listen
   state in the studio toolbar. `F12` disables detection entirely; check
   **Settings → Detection** shows *Enabled*.
2. **Is the right input the OS default?** Zopresent transcribes the default
   system input device. Set the pulpit mic or desk feed as default in your
   OS sound settings — see [configuring audio input](/docs/audio-input).
3. **Is the feed clean?** Room mics pick up everything; a mic at the back of
   a hall will struggle. Prefer a mixing-desk feed or a mic close to the
   preacher.
4. **Engine missing?** Release packages bundle the Moonshine engine, so this
   only happens with from-source builds. The app detects a missing engine
   and offers the download rather than failing silently — see
   **Settings → Detection**.
5. **Custom command broken?** If you configured a custom engine, test the
   command in a terminal first; the `{audio}` placeholder must be where the
   command expects the file path.

## Detection finds the wrong verse, or too many

- **Check the method label.** *Explicit reference* matches are the most
  reliable; *spoken quote* and *contextual reference* matches are inferences
  — read the verse text on the card before approving. That is why it is on
  the card.
- **Check the confidence band.** Medium and low cards are worth a glance,
  not a blind click. High means the phrasing was heard cleanly — not that it
  is verified right. The bands are honest about this; be honest with them.
- **Reference style matters.** *"John chapter three verse sixteen"* and
  *"John 3:16"* are detected reliably. Loose allusions ("the verse about
  love") are not references and will not be detected — that is by design.
- **Non-scripture talk filling the queue?** Press **F12** for those
  stretches. It stops new detections without touching the live display.
- Remember the design: detection **never projects on its own**. A wrong
  card in the queue is an annoyance; approve nothing you haven't read.

## Display issues

- **The audience window shows the wrong screen.** Move the audience window
  to the projector display and make it full screen; the studio window stays
  on the operator's monitor.
- **The splash appeared in the studio.** That is expected — a 10-second
  verse cycle on startup, studio window only. It never shows on the audience
  display.
- **Wrong item went live.** Open the **decision history** and restore the
  previously projected item; the screen never needs to go blank.
- **Nothing goes live.** You must preview first, then send — nothing
  projects without the deliberate step. That is the safety model, not a bug.

## Performance

- **Lookups feel slow?** They shouldn't: reference lookups target p95 under
  50 ms and full-text search under 150 ms, enforced by a CI benchmark. If
  they are genuinely slower on your hardware, please
  [open an issue](https://github.com/zowesoft/zopresent/issues).
- **First launch takes a moment.** The studio loads behind a fixed
  10-second splash — that is the app, not your disk.

## The database and backups

- **Backups are automatic.** The database is checksum-tracked and backed up;
  restoring a backup rolls the running app back with it — see
  **Settings → Backups**.
- **"Database was written by a newer build."** You opened an older version
  against newer data. The app refuses rather than corrupt. Update the app,
  or restore a [backup](/docs/settings-reference#backups).
- **Where is my data?** `%LOCALAPPDATA%\Zowesoft\Zopresent` on Windows;
  `~/.local/share/Zowesoft/Zopresent` on Linux; equivalent
  `Application Support` path on macOS.

## Install problems

- **SmartScreen / Gatekeeper warns.** Expected while packages are unsigned:
  Windows — *More info → Run anyway*; macOS — right-click → *Open*. Code
  signing is planned.
- **A second launch does nothing new.** Single-instance guard: it focuses
  the running studio instead of starting a duplicate.
