const express = require("express");
const server = express();
const logger = require("morgan");

server.use(logger);

const port = 8000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
