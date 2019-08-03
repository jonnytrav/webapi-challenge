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

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  actionsDB.remove(id).then(count => {
    if (count === 1) {
      res.status(204);
    } else {
      res
        .status(404)
        .json({ success: false, message: "Invalid resource to be deleted." });
    }
  });
});

module.exports = router;
