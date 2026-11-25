// Monday Morning Punchlines — one line for the make.fun bounty
// u-gentle-badger-68-monday-morning-punchlines-709645dc ($5).
// The joke: Monday arrives and the only reliable thing is the coffee —
// the alarm and the human have a long-standing disagreement about getting up.
// It lands because the coffee is the one "colleague" who never snoozes,
// never calls in sick, and never negotiates: it just shows up on time.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Monday again. My alarm and I have agreed to disagree, and the coffee is the only one who showed up on time.";
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
