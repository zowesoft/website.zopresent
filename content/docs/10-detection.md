---
title: "Scripture detection"
summary: "The on-device detector hears scripture as it is spoken and queues it for the operator — never projects on its own."
section: "Features"
order: 1
---

# Scripture detection

Zopresent listens to the preacher in real time and detects scripture as it
is spoken. When a reference is heard, it is placed in the **detection queue**
for the operator to approve — with the verse text, the translation, the
method that matched it, and an explicit confidence statement.

It never projects on its own. A candidate is a *suggestion*: approving it
fills the preview for you to send, and sending it live is still your
keystroke. That design is deliberate — scripture first means a human decides
what the room sees.

![Detection card in the studio queue](/screenshots/detection.png)

## How it works

1. **Audio is captured** from your system input device — see
   [configuring audio input](/docs/audio-input).
2. **The speech engine transcribes** the audio. Moonshine ships with the app
   and runs entirely on-device; there is no first-run download and no cloud.
3. **The detector scans the transcript** for scripture: direct references,
   quoted verse text, and phrases like *"now read verse twenty-nine"*.
4. **Matched verses are looked up** in your default Bible translation.
5. **The verse is queued** in the studio's detection panel, waiting for you.

The whole pipeline is local. No audio, transcript or text ever leaves the
machine.

## Start and stop listening

| Key | Action |
|---|---|
| `F8` | Toggle listening |
| `F9` | Pause / resume auto-projection (when enabled) |
| `F12` | Emergency disable — stops new detections without touching the live display |

F8 appears as a **Listen** button in the studio toolbar too. F12 is the
panic switch: it stops the detector instantly and leaves whatever is on the
audience display untouched. The same toggle lives in
**Settings → Detection**.

## What the detector catches

Every card in the queue is labelled with the method that matched it — the
label is spelled out in text, not carried by colour alone:

- **Explicit reference** — the book, chapter and verse were named directly:
  *"turn with me to John 3:16"*, *"John chapter three verse sixteen"*.
  When heard cleanly these score highest.
- **Spoken quote** — the preacher quoted the verse's *text* rather than the
  reference. Zopresent matches the wording against your installed
  translations and shows the passage it believes was quoted.
- **Contextual reference** — a fragment like *"now read verse twenty-nine"*
  that only makes sense against the passage already in play. Zopresent
  resolves it against the current scripture context and, because the answer
  depends on inference rather than a name, **always queues it for the
  operator**. It can never be projected automatically.

## Confidence, honestly

Each detection carries a score and a band:

| Band | Score | Meaning |
|---|---|---|
| **High** | ≥ 92% | The phrasing was heard cleanly. |
| **Medium** | ≥ 65% | A plausible match — worth a glance. |
| **Low** | below 65% | Treat as noise unless it looks right. |

One honest caveat: these bands say how **cleanly the phrasing was heard**,
not whether the match is *verified correct*. Spoken quotes are capped below
the high band for exactly that reason — a quote match is an inference about
wording, and the app does not dress it up as certainty. Glance at the verse
text on the card; it is right there for that purpose.

## The queue

Detections do not appear on screen when detected. They wait in the panel:

- **Approve to preview** — fills the preview with the verse so you send it
  on air yourself, through the same preview → live step as everything else.
- **Project live** — for when you are already confident and want the verse
  up immediately. Still your click.
- **Decision history** — every approval and projection is logged for the
  session, so you can see what was heard and restore anything that went out.

## Auto-projection, and why it is off

Auto-projection exists, but it is **off by default**. When armed — the
studio status calls it *Hybrid, gates armed* — a candidate is only projected
if it passes an explicit safety checklist. Every gate is named, and the ones
that block a candidate stay in your queue with the reason spelled out:

| Gate | Requirement |
|---|---|
| **Finalized** | The segment's final transcript has settled — a live partial is never eligible. |
| **Unambiguous** | Book, chapter and verse were all resolved; a whole chapter is too broad to put on the wall unasked. |
| **Passage exists** | The selected translation actually returned the verses. |
| **Explicit intent** | An explicit reference was *spoken* — quotes and contextual matches never qualify. |
| **No conflict** | No competing candidate for the same moment. |
| **No repeat** | The hearing is not a repeat; repeat hearings are folded into one card. |
| **Enabled** | Auto-projection is on and not paused (`F9`). |
| **High confidence** | The detection is in the high band. |

That is eight conditions a verse must clear before Zopresent would put it on
the wall without your hand — and one failure of any of them keeps it in the
queue. `F9` pauses auto-projection, `F12` still kills everything, and
contextual references are exempt by design: they always wait for you.

Until the detector is scored against real labelled audio, the queue is the
workflow. It costs one keystroke and buys you certainty.

## Privacy

- All speech processing runs **locally**. No audio, transcripts, or
  detections leave the machine.
- No telemetry, no analytics, no network calls in normal operation.
- The only network touch in the detection settings is downloading an engine
  if you ask for one.

You can run the whole system in a building with no internet connection.

## Getting the best results

- Give the detector a **clean, close, dominant** mic feed — see
  [configuring audio input](/docs/audio-input).
- Rehearse with **F8** during a sound check and read a passage at service
  volume.
- Speak references the way they are written when precision matters:
  *"John three, verse sixteen"* beats *"the one about God so loving"*.
- Use **F12** during long non-scripture stretches if the queue fills with
  noise you don't want to see.
