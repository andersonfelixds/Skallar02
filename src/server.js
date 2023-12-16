const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
require('dotenv').config();

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(process.env.APP_PORT, () =>
      console.log('Server online na porta => '+process.env.APP_PORT)
    );
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;