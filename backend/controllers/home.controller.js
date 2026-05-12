import express from "express";

import { areas as areasService } from "../services/home.service.js";
import { gallery as galleryService } from "../services/home.service.js";
import { offer as offerService } from "../services/home.service.js";
import { projects as projectsService } from "../services/home.service.js";

const home = express.Router();

const areas = express.Router();
areas.get("/", (_, res) => {
  return res.status(200).send(areasService.get());
});
home.use("/areas", areas);

const gallery = express.Router();
gallery.get("/", (_, res) => {
  return res.status(200).send(galleryService.get());
});
home.use("/gallery", gallery);

const offer = express.Router();
offer.get("/", (_, res) => {
  return res.status(200).send(offerService.get());
});
home.use("/offer", offer);

const projects = express.Router();
projects.get("/", (_, res) => {
  return res.status(200).send(projectsService.get());
});
home.use("/projects", projects);

export default home;
