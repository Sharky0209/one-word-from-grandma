// Entry for make.fun's "One Word From Grandma": the program writes one
// word, the whole entry, to /output/entry.txt for the house judge.
// The file holds exactly "robit" (5 bytes, no trailing newline).
import { writeFileSync, mkdirSync } from "node:fs";

const word = "robit";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
