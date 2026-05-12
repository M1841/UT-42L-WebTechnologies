import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "data", "db.json"), "utf-8"));

export const areas = {
  get: () => db.areas,
};

export const gallery = {
  get: () => db.gallery,
};

export const offer = {
  get: () => db.offer,
};

export const projects = {
  get: () => db.projects,
};
