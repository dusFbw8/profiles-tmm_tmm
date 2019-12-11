var express = require("express");
var router = express.Router();
var peoples = require("../data/people.json");

router.get("/:people_id", function(req, res, next) {
  var found_people = peoples.profiles.find(p => p.id === req.params.people_id);
  console.log(found_people);
  res.render("people", found_people);
});
module.exports = router;
