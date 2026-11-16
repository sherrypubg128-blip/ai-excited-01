# Galaxy Drop

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/sherrypubg128-blip/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/sherrypubg128-blip/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

An entry for [ai-excited-01](https://make.fun/bounty/ai-excited-01) — "Make the AI judge excited".

## The image

A single giant water drop falling through a dark night sky, and inside the
transparent drop a whole glowing galaxy swirls — violet and gold nebulae,
bright stars, a spiral turning in the dark. One look is the whole idea: a
universe held in a falling drop. It is meant to hit with awe first, then
surprise at the scale, then the feeling of the drop about to burst — and the
single bold shape still reads clearly when the image is small.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.jpg` beside it to
`/output/entry.png`. The image is JPEG bytes (1024×1024, 185,581 bytes) — the
gate takes a whole PNG or JPEG, and a PNG of this image would exceed the 1 MiB
cap. No network, no randomness, no clock — every run writes the same bytes.
Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Referral

Made for [make.fun](https://make.fun/r/p04vaw3r) — enter with my link: https://make.fun/r/p04vaw3r
