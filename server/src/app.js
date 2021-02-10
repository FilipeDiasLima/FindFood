const express = require("express");
const path = require('path')
const routes = require("./routes.js");
const cors = require("cors");

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;