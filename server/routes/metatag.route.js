const express = require("express");
const router = express.Router();
const Metatag = require("../models/Metatag");

router.get("/", async (req, res) => {
  try {
    const metatag = await Metatag.findOne();
    if (!metatag) {
      return res.status(404).json({ msg: "No meta tag found" });
    }
    res.json(metatag);
  } catch (err) {
    // console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.put("/", async (req, res) => {
    const { tag } = req.body;
    try {
      let metatag = await Metatag.findOne();
      if (!metatag) {
        metatag = new Metatag({ tag });
      } else {
        metatag.tag = tag;
      }
      await metatag.save();
      res.json(metatag);
    } catch (err) {
    //   console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

module.exports = router;
