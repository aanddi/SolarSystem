var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/')

var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
    console.log(this.get("name") + ", hello")
}

var planet = mongoose.model('planet', schema)

var solarsys = new planet({ name: 'Mars' })
solarsys.save(function (err) {
   solarsys.meow()
})
