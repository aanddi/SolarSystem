var express = require('express');
var router = express.Router();
var Planet = require("../models/planet").Planet
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маошрутов, начинающихся с Planet');
});

/* Страница ведущих */
router.get('/:nick', function(req, res, next) {
  Planet.findOne({nick:req.params.nick}, function(err,planet){
      if(err) return next(err)
      if(!planet) return next(new Error("Нет такой планеты в солнечной системе"))
      res.render('solsytem', {
        title: planet.title,
        picture: planet.avatar,
        desc1: planet.desc1,
        desc2: planet.desc2,
        desc3: planet.desc3,
      })
  })
})

module.exports = router;
