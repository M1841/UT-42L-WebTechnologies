import express from "express";

import { header as headerService } from "../services/shared.service.js";
import { footer as footerService } from "../services/shared.service.js";

const sharedRouter = express.Router();

sharedRouter.get("/header", (_, res) => {
  return res.status(200).send(headerService.get());
});

sharedRouter.get("/footer", (_, res) => {
  return res.status(200).send(footerService.get());
});

export default sharedRouter;
