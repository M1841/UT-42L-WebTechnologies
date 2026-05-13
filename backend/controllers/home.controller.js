import express from "express";

import { areas as areasService } from "../services/home.service.js";
import { gallery as galleryService } from "../services/home.service.js";
import { offer as offerService } from "../services/home.service.js";
import { projects as projectsService } from "../services/home.service.js";

const home = express.Router();

const areas = express.Router();
areas.get("/", (req, res) => {
  const lang = req.query.lang ?? "en";
  return res.status(200).send(areasService.get(lang));
});
home.use("/areas", areas);

const gallery = express.Router();
gallery.get("/", (req, res) => {
  return res.status(200).send(galleryService.get());
});
home.use("/gallery", gallery);

const offer = express.Router();
offer.get("/", (req, res) => {
  const lang = req.query.lang ?? "en";
  return res.status(200).send(offerService.get(lang));
});
home.use("/offer", offer);

const projects = express.Router();
projects.get("/", (req, res) => {
  const lang = req.query.lang ?? "en";
  return res.status(200).send(projectsService.get(lang));
});
home.use("/projects", projects);

export default home;
