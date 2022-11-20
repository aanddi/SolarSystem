var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')

var planet = require("./models/planet").planet

var planet = new planet({
title: "Марс",
nick: "Mars"
})

console.log(planet)
planet.save(function(err, planet, affected){
    console.log(planet.title)
})