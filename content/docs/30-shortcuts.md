---
title: "Shortcuts"
summary: "The keystrokes that run a live service — every one rebindable without a restart."
section: "Advanced"
order: 1
---

# Shortcuts

## The core loop

| Key | Action |
|---|---|
| `Ctrl+L` | Send the previewed item live to the audience display |
| `Ctrl+F` | Focus the Bible search box |
| `F8` | Toggle listening — on-device scripture detection |
| `F9` | Pause / resume auto-projection (when enabled) |
| `F12` | Emergency disable detection — live output preserved |
| `←` / `→` | Previous / next item in the service order |
| Enter | Approve the top detection card to preview (queue focused) |

These are the defaults. Every action can be rebound in
**Settings → Shortcuts**, and an open studio picks up the change
**without a restart**.

## The two safety switches

`F9` and `F12` are different tools for different moments:

- **F12 — emergency disable.** The detector stops accepting new audio
  immediately. Whatever is on the audience display stays exactly as it is.
  This is the panic switch for a live service.
- **F9 — pause auto-projection.** Only relevant if you have enabled
  auto-projection (off by default); pauses it without disabling detection.
  With auto-projection off, F9 has nothing to pause.

## The menus

The studio's menu bar carries the same actions as the toolbar, plus a few
that only live there:

| Menu | Action |
|---|---|
| File → New service | `Ctrl+N` — start a fresh service |
| File → Backup now | Write a database backup immediately |
| Live → Project live | Send the preview to the audience display |
| Live → Clear display | Blank the audience display — a deliberate, recorded action |
| Live → Emergency disable detection | The `F12` switch, without the keyboard |
| View → Toggle fullscreen | `F11` |

**Clear display** is worth knowing: it is an explicit action, recorded in the
decision history like any projection, so a cleared screen is one click from
being restored.

## Design principles

- **Preview before air.** Nothing reaches the audience display without a
  deliberate step. Detection approval fills the preview — the live send is
  still yours.
- **History is reversible.** Every send is recorded; restore anything that
  was already projected.
- **Rebinding is live.** Change a shortcut mid-service if you must — the
  studio applies it on the spot.

See [getting started](/docs/getting-started) for installation and
[your first service](/docs/first-service) for how these keys fit a full
service.
