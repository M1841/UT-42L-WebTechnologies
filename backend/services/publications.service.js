import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, "..", "data", "db.json");
const getDb = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));

export const publications = {
  get: () => getDb().publications,
  search: (query, filterTitle, filterAuthor, filterVenue, minYear, maxYear) =>
    getDb().publications.filter((pub) => {
      if (!query && pub.year >= minYear && pub.year <= maxYear) return true;
      if (!query) return false;

      let matches = false;
      if (filterTitle && pub.title.toLowerCase().includes(query)) {
        matches = true;
      }
      if (
        filterAuthor &&
        pub.authors.some((author) => author.toLowerCase().includes(query))
      ) {
        matches = true;
      }
      if (filterVenue && pub.venue.toLowerCase().includes(query)) {
        matches = true;
      }
      return matches && pub.year >= minYear && pub.year <= maxYear;
    }),
};
