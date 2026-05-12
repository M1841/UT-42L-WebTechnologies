import fs from "node:fs";

export const seed = async () => {
  const { data } = await import("../data/default.js");
  save(data);
};

export const save = (data) => {
  fs.writeFileSync("./data/db.json", JSON.stringify(data));
};
