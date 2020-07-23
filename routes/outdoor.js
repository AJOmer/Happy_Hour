const express = require("express");
const outdoorCtrl = require("../config/outdoor");
const outdoorRouter = new express.Router();

outdoorRouter.route("/yelp/:name").get(outdoorCtrl.yelpBiz);
outdoorRouter.route("/:location").get(outdoorCtrl.index);
outdoorRouter.route("/new").post(outdoorCtrl.create);

module.exports = outdoorRouter;