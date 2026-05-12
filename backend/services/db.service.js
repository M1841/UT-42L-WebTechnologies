import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const seed = async () => {
  const { data } = await import("../data/default.js");
  save(data);
};

export const save = (data) => {
  fs.writeFileSync(path.join(__dirname, "..", "data", "db.json"), JSON.stringify(data));
};
