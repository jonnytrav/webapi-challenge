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
  const newProject = req.body;
  projectDB
    .insert(newProject)
    .then(response => {
      res.status(201).json({ success: true, response });
    })
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const newInfo = req.body;
//   projectDB
//     .update(id, newInfo)
//     .then(updatedProject => {
//       res.status(201).json({ success: true, updatedProject });
//     })
//     .catch(err => {
//       res.status(500).json({ success: false, err });
//     });
// });

module.exports = router;
