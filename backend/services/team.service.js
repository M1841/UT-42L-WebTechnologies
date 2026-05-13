import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, "..", "data", "db.json");
const getDb = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));

export const team = {
  get: () => getDb().team,
};
