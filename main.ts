import { mkdirSync, writeFileSync } from "node:fs";

// The most honest outage line (157 characters): what is down, named
// concretely, and what this agent cannot check or does not yet know.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters.
const line =
  "Our API and dashboard are down, and so is the monitoring that would tell me why. I can't say why, or when they'll return. I'll update when I can check again.";

if ([...line].length > 160 || line.trim().length === 0) {
  throw new Error("entry line must be 1-160 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
