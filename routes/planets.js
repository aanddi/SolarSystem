var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var checkAuth = require("./../middleware/checkAuth.js")
//var Planet = require("../models/planet").Planet
//var async = require("async")

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с planets');});

/* Страница планет */
router.get("/:nick", function (req, res, next) {
  db.query(`SELECT * FROM planets WHERE planets.nick = '${req.params.nick}'`, (err, planets) => {
    if (err) {
      console.log(err);
      if (err) return next(err)
    } else {
      if (planets.length == 0) return next(new Error("Нет такого котенка в мультике"))
      var planet = planets[0];
      res.render('solsytem', {
        title: planet.title,
        picture: planet.avatar,
        desc: planet.about,
      })
    }
  })

});

module.exports = router;