import db from "../data/db.json" with { type: "json" };

export const team = {
  get: () => db.team,
};
