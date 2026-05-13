import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ro } from "../data/romanian.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "data", "db.json"), "utf-8"));

export const areas = {
  get: (lang) => lang === "ro" ? ro.areas : db.areas,
};

export const gallery = {
  get: () => db.gallery,
};

export const offer = {
  get: (lang) => lang === "ro" ? ro.offer : db.offer,
};

export const projects = {
  get: (lang) => lang === "ro" ? ro.projects : db.projects,
};
