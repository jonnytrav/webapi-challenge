const express = require("express");
const server = express();
const projectsRoute = require("./projectsRoute");
const actionsRoute = require("./actionsRoute");

// const logger = (req, res, next) => {
//   console.log(`${req.method} request from ${req.url}`);
//   next();
// };

// server.use(logger);
server.use(express.json());
server.use("/api/projects", projectsRoute);
server.use("/api/actions", actionsRoute);

const port = 8000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
