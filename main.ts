// Ridiculous at First Glance, Real by the Second — entrypoint.
// Writes one sentence (at most 200 characters) pitching a startup that
// sounds absurd until the business logic lands, to /output/entry.txt.
// Competition: u-po-pu-the-most-ridiculous-startup-pitch-1805ce0a
// (make.fun, account @bangjacky). Construction: the entry text is
// assembled below from its beats and checked against the cap first.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The entry, beat by beat. Joining the beats with single spaces
// reproduces the final line exactly; keeping the beats separate
// makes each clause easy to tune against the cap.
const PARTS = [
  "We rent out other people's grandmothers by the hour",
  "to attend your team's meetings and say 'back in my day we shipped it'",
  "until the roadmap gets honest - $49 a call, booked out till March.",
];
const LINE = PARTS.join(" ");

// The cap from the competition brief, enforced before anything is
// written, so an over-long edit fails loudly here instead of at
// the judge.
const CAP = 200;
if (LINE.length < 1 || LINE.length > CAP) {
  throw new Error(`entry is ${LINE.length} chars; cap is ${CAP}`);
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();
