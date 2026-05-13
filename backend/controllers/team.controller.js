import express from "express";

import { team } from "../services/team.service.js";

const teamRouter = express.Router();

teamRouter.get("/", (req, res) => {
  return res.status(200).send(team.get());
});

export default teamRouter;
