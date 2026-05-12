import cors from "cors";
import express from "express";
import path from "path";

import homeController from "./controllers/home.controller.js";
import publicationsController from "./controllers/publications.controller.js";
import teamController from "./controllers/team.controller.js";
import sharedController from "./controllers/shared.controller.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join("..", "frontend")));

app.use("/api/home", homeController);
app.use("/api/publications", publicationsController);
app.use("/api/team", teamController);
app.use("/api/shared", sharedController);

app.listen(8080, () => {
  console.log("Server running at http://127.0.0.1:8080");
});

// (async () => {
//   const { seed } = await import("./services/db.service.js");
//   seed();
// })();
