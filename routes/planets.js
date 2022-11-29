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
  async.parallel([
          function(callback){
            Planet.findOne({nick:req.params.nick}, callback)
          },
          function(callback){
            Planet.find({},{_id:0,title:1,nick:1},callback)
          }
      ],
      function(err,result){
          if(err) return next(err)
          var planet = result[0]
          var planets = result[1] || []
          if(!planet) return next(new Error("Нет такой планеты в солнечной системе"))
          res.render('solsytem', {
              title: planet.title,
              picture: planet.avatar,
              desc1: planet.desc1,
              desc2: planet.desc2,
              desc3: planet.desc3,
              menu: planets
          });
      })
})

module.exports = router;
