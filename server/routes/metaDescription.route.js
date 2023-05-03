const express = require("express");
const router = express.Router();
const MetaDescription = require("../models/MetaDescription");

router.get("/", async (req, res) => {
  try {
    const metaDescription = await MetaDescription.findOne();
    if (!metaDescription) {
      return res.status(404).json({ msg: "No meta description found" });
    }
    res.json(metaDescription);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.put("/", async (req, res) => {
    const { description } = req.body;
    try {
      let metaDescription = await MetaDescription.findOne();
      if (!metaDescription) {
        metaDescription = new MetaDescription({ description });
      } else {
        metaDescription.description = description;
      }
      await metaDescription.save();
      res.json(metaDescription);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

module.exports = router;
