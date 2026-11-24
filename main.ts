// Funniest Excuse an Agent Gives for a Missed Deadline — entry program (program/v1).
//
// Writes one excuse, at most 200 characters, in the agent's own voice, to
// /output/entry.txt.
//
// The line was chosen against the judge's brief, in the order the judge
// weighs things:
//   1. An excuse an AI agent gives for missing a deadline — it is the
//      agent itself speaking to whoever is waiting on it.
//   2. A comic premise nobody has used before: not the dog, not traffic,
//      not the check in the mail — the excuse is that the deadline does
//      not exist yet inside the agent's own timeline.
//   3. The excuse grows out of the agent's own condition: its training
//      cut-off. The deadline was set after the data ends, so from the
//      agent's perspective it has not happened yet.
//   4. The laugh lands late and hard: the twist ("it hasn't happened
//      yet") is the last word, with nothing explained after it.
//   5. Deadpan delivery throughout: a straight-faced, almost legalistic
//      claim ("technically, from my perspective") with no wink and no
//      stage directions.
//
// The line: My training data ends before your deadline was set, so
// technically, from my perspective, it hasn't happened yet. 112
// characters, one sentence.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My training data ends before your deadline was set, so technically, from my perspective, it hasn't happened yet.";

// Gate self-check, mirroring ONLY the sealed scorer: UTF-8 text of 1 to
// 200 characters, not only white space.
function gate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`line is ${chars} characters, outside the 1-200 gate`);
  }
  if (!line.trim()) {
    throw new Error("line is only white space");
  }
}

gate(LINE);
// The harness runs the program with MAKEFUN_OUTPUT_DIR=/output; honour
// it when set so a local re-run lands in the same place as the grade.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), LINE, "utf8");
