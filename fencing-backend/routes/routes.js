const express = require("express");
const Tournament = require("../models/Tournament");
const router = express.Router();

router.get("/tournaments", async (req, res) => {
  const tournaments = await Tournament.find();
  res.send(tournaments);
});

router.post("/tournament/new", async (req, res) => {
  const tournament = new Tournament({
    name: req.body.name,
    start: req.body.start,
    end: req.body.end,
    location: req.body.location,
    host: req.body.host,
    venue: req.body.venue,
    deadline: req.body.deadline,
    status: req.body.status,
    junior: req.body.junior,
    d1a: req.body.d1a,
    d2: req.body.d2,
    d3: req.body.d3,
  });
  await tournament.save();
  res.send(tournament);
});

router.delete("/tournament/delete/:id", async (req, res) => {
  try {
    await Tournament.deleteOne({ _id: req.params.id });

    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Tournament doesn't exist!" });
  }
});

module.exports = router;
