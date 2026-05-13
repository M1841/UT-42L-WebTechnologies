import express from "express";

import { publications } from "../services/publications.service.js";

const publicationsRouter = express.Router();

// Return all publications
publicationsRouter.get("/", (_, res) => {
  return res.status(200).send(publications.get());
});

// Search endpoint with query parameters
publicationsRouter.get("/search", (req, res) => {
  const query = (req.query.search ?? "").toString().toLowerCase();
  const filterTitle = req.query.filterTitle !== "false";
  const filterAuthor = req.query.filterAuthor !== "false";
  const filterVenue = req.query.filterVenue !== "false";
  const minYear = req.query.minYear ? parseInt(req.query.minYear, 10) : 0;
  const maxYear = req.query.maxYear ? parseInt(req.query.maxYear, 10) : 9999;

  const results = publications.search(
    query,
    filterTitle,
    filterAuthor,
    filterVenue,
    minYear,
    maxYear,
  );

  return res.status(200).send(results);
});

export default publicationsRouter;
