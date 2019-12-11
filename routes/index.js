var express = require("express");
var router = express.Router();
var peoples = require("../data/people.json");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { peoples: peoples.profiles });
});

module.exports = router;
