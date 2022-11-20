var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/')

var planet = mongoose.model('planet', { name: String })

var solar = new planet({ name: 'Марс' })
solar.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Hello world!')
    }
})
