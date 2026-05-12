import db from "../data/db.json" with { type: "json" };

export const publications = {
  get: () => db.publications,
};
