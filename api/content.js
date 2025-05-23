const express = require("express");
const router = express.Router();
const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_TOKEN,
  apiVersion: "2024-01-01",
});

// CREATE page
router.post("/", async (req, res) => {
  try {
    const doc = await client.create({ _type: "page", ...req.body });
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all pages or filter by `pageType`
router.get("/", async (req, res) => {
  const { type } = req.query;
  const query = type
    ? `*[_type == "page" && pageType == "${type}"]`
    : '*[_type == "page"]';

  try {
    const docs = await client.fetch(query);
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ single page by slug
router.get("/:slug", async (req, res) => {
  try {
    const doc = await client.fetch(
      `*[_type == "page" && slug.current == $slug][0]`,
      { slug: req.params.slug }
    );
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE page by ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await client.patch(req.params.id).set(req.body).commit();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE page
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await client.delete(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
