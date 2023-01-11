var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
var checkAuth = require("./../middleware/checkAuth.js")

// получение всех планет
router.get('/', function (req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с planets');});

// Страница планет 
router.get("/:nick",checkAuth, function (req, res, next) {
  db.query(`SELECT * FROM planets WHERE planets.nick = '${req.params.nick}'`, (err, planets) => {
    if (err) {
      console.log(err);
      if (err) return next(err)
    } else {
      if (planets.length == 0) return next(new Error("Нет такой планеты"))
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