import cors from "cors";
import express from "express";
import path from "path";

import homeController from "./controllers/home.controller.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join("..", "frontend")));

app.use("/api/home", homeController);

app.listen(8080, () => {
  console.log("Server running at http://127.0.0.1:8080");
});

// (async () => {
//   const { seed } = await import("./services/db.service.js");
//   seed();
// })();
