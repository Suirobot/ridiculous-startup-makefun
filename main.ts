// Ridiculous at First Glance, Real by the Second — entrypoint.
// Writes one sentence (at most 200 characters) pitching a startup that
// sounds absurd until the business logic lands, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "We rent grandmothers to sit in your meetings and say 'in my day we just shipped it' until everyone agrees on a plan - offices pay $49 a session.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
