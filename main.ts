// Ridiculous at First Glance, Real by the Second — entrypoint.
// Writes one sentence (at most 200 characters) pitching a startup that
// sounds absurd until the business logic lands, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "We rent out other people's grandmothers by the hour to attend your team's meetings and say 'back in my day we shipped it' until the roadmap gets honest - $49 a call, booked out till March.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
