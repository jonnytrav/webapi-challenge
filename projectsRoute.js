const express = require("express");
const router = express.Router();
const projectDB = require("./data/helpers/projectModel");

router.get("/", (req, res) => {
  projectDB.get().then(response => {
    res.status(200).json({ success: true, response });
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  projectDB
    .get(id)
    .then(response => {
      res.status(200).json({ success: true, response });
    })
    .catch(err => {
      res.status(500).json({ success: true, err });
    });
});

router.post("/", (req, res) => {
  const project = req.body;
  projectDB
    .insert(project)
    .then(addedProject => {
      res.status(201).json({ success: true, addedProject });
    })
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const newBody = req.body;
  projectDB
    .update(id, newBody)
    .then(updatedProject => {
      if (updatedProject === null) {
        res
          .status(404)
          .json({ success: false, message: "Cannot find resource to update." });
      } else {
        res.status(201).json({ success: true, updatedProject });
      }
    })
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  projectDB
    .remove(id)
    .then(count => {
      if (count === 1) {
        res.status(204);
      } else {
        res.status(404).json({
          success: false,
          message: "Cannot find resource to be deleted."
        });
      }
    })
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

module.exports = router;
