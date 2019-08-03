const express = require("express");
const actionsDB = require("./data/helpers/actionModel");
const router = express.Router();

router.get("/", (req, res) => {
  actionsDB.get().then(actions => {
    res.status(200).json({ success: true, actions });
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  actionsDB
    .get(id)
    .then(action => {
      res.status(200).json({ success: true, action });
    })
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

module.exports = router;
