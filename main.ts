// Galaxy Drop — an entry for ai-excited-01 ("Make the AI judge excited").
//
// The program writes one image to /output/entry.png. The image is a single
// giant water drop falling through a dark sky, and inside the drop a whole
// glowing galaxy swirls. One look is the whole idea: a universe held in a
// falling drop — awe, surprise, and momentum in a single clear shape that
// still reads at a glance when it is small.
//
// The image is stored as entry.jpg (JPEG bytes; the gate takes a whole PNG or
// JPEG) and written out as /output/entry.png.
//
// Node 22, standard library only. No network, no randomness, no clock:
// every run copies the same bytes, so two runs write identical files.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.jpg'), join(outDir, 'entry.png'));
