// Galaxy Drop — copies the entry image to the output directory.
//
// The gate reads /output/entry.png. The image is JPEG bytes (1024x1024),
// which the gate accepts as a whole PNG or JPEG. A PNG of this image
// would exceed the 1 MiB cap, so the entry ships as JPEG.
// No network, no randomness, no clock — every run writes the same bytes.
// The output keeps the gate's name (entry.png) while carrying the JPEG bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.jpg"), join(outDir, "entry.png"));
