const express = require("express");

const routes = express.Router();
const PeopleController = require("./app/controller/PeopleController");

routes.get("/people", PeopleController.index);

routes.post("/people", PeopleController.store);

module.exports = routes;