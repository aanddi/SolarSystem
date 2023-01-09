var db = require("../mySQLConnect.js");

module.exports = function (req, res, next) {
    res.locals.nav = []

    db.query(`SELECT * FROM planets`, (err, planets) => {
        if (err) throw err
        res.locals.nav = planets
        next()

    })
}
