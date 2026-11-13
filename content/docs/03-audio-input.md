---
title: "Configuring audio input"
summary: "Point Zopresent's detector at the right microphone and verify it hears the preacher."
section: "Getting started"
order: 3
---

# Configuring audio input

Scripture detection listens through a microphone and transcribes what it
hears, entirely on your machine. Getting the input right is 90% of making
detection useful.

## What you need

Any input device your OS exposes works — a lectern mic, a room mic on the
pulpit, or a feed from the mixing desk. What matters is that the preacher's
voice is **clear and dominant** in the feed:

- A **desk feed** (an aux output from the mixing console) is usually the best
  source: no room noise, no congregation murmur.
- A **room mic** works but picks up everything — air conditioning, shuffling,
  crying babies — which costs accuracy.
- The mic should be **close to the speaker**. A mic at the back of a large
  room will struggle.

## Choosing the input in Zopresent

1. Open **Settings → Detection**.
2. Pick your speech engine. **Moonshine ships with the app** — nothing to
   download if you installed a release package. Advanced users can point
   Zopresent at another engine with a custom command (see below).
3. Zopresent transcribes the **default system input device**. Set the right
   microphone as your OS default before the service:

   - **Windows:** Settings → System → Sound → Input
   - **macOS:** System Settings → Sound → Input
   - **Linux:** `pavucontrol` or your desktop's sound settings

## Verify before the service

Press **F8** in the studio to start listening and do a dry run:

1. Have someone read a passage aloud at service volume.
2. Watch the detection queue — references like *"turn to John chapter
   three"* should appear within a few seconds of being spoken.
3. When you are done, press **F8** again to stop.

If references never appear, work through
[troubleshooting → audio not detected](/docs/troubleshooting#audio-not-detected).

## Custom engines (advanced)

If Moonshine does not suit your language or hardware, Settings → Detection
accepts a custom command. The command receives the audio file path in place
of `{audio}`:

```text
whisper.tiny=C:\path\whisper-cli.exe -m model.bin -np -f {audio}
```

Pick **Custom command…** in the engine dropdown, paste the command, and
**Save engine**. The engine runs offline; only the engine download itself
ever touches the network.

## A word on privacy

Whatever input device you choose, the audio never leaves the machine.
Transcription and detection run locally; nothing is uploaded, recorded to
disk, or sent anywhere. See [privacy](/docs/detection#privacy) on the
detection page.
