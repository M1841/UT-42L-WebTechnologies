import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "data", "db.json"), "utf-8"));

export const footer = {
  get: () => db.footer,
};

export const header = {
  get: () => db.header,
};
