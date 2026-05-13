import express from "express";

import { header as headerService } from "../services/shared.service.js";
import { footer as footerService } from "../services/shared.service.js";

const sharedRouter = express.Router();

sharedRouter.get("/header", (req, res) => {
  const lang = req.query.lang ?? "en";
  return res.status(200).send(headerService.get(lang));
});

sharedRouter.get("/footer", (req, res) => {
  const lang = req.query.lang ?? "en";
  return res.status(200).send(footerService.get(lang));
});

export default sharedRouter;
