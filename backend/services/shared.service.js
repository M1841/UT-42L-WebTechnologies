import db from "../data/db.json" with { type: "json" };

export const footer = {
  get: () => db.footer,
};

export const header = {
  get: () => db.header,
};
