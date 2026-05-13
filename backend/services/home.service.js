import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ro } from "../data/romanian.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, "..", "data", "db.json");
const getDb = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));

export const areas = {
  get: (lang) => lang === "ro" ? ro.areas : getDb().areas,
};

export const gallery = {
  get: () => getDb().gallery,
};

export const offer = {
  get: (lang) => lang === "ro" ? ro.offer : getDb().offer,
};

export const projects = {
  get: (lang) => lang === "ro" ? ro.projects : getDb().projects,
};
