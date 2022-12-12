var mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/solarsystem')
var User = require("./models/user.js").User

var first_user = new User({
    username: "Vasya",
    password: "qwerty"
})

first_user.save(function(err,user){
    if(err) throw err
    console.log(user)
})
