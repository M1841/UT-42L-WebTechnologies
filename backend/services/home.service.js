import db from "../data/db.json" with { type: "json" };

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
