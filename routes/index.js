var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect')
var checkAuth = require("./../middleware/checkAuth.js") // подключение функции для закрытие контента

// Главная (счетчик)
router.get('/', function (req, res, next) {
  db.query(`SELECT title, nick FROM planets`, (err, menu) => {
    req.session.greeting = "HelloWorld",
      res.cookie('gretting', 'HelloWorld').render('index', {
        title: 'Express',
        menu: menu,
        counter: req.session.counter
      })
  });
});

// Страница для аунтефикации 
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход', error:null});
});

// кнопка войти в аккаунт
router.post('/logreg', function (req, res, next) {
  var username = req.body.username
  var password = req.body.password
  db.query(`SELECT * FROM user WHERE user.username = '${req.body.username}'`, function (err, users) {
    if (err) return next(err)
    if (users.length > 0) {
      var user = users[0];
      if (password == user.password) {
        req.session.user = user.user_id
        res.redirect('/')
      } else {
        res.render('logreg', { title: 'Вход', error: 'Пароль не верный' })
      }
    } else {
      db.query(`INSERT INTO user (username, password) VALUES ('${username}', '${password}')`, function (err, user) {
        if (err) return next(err)
        req.session.user = user.user_id
        res.redirect('/')
      })
    }
  })
});

// Кнопка для выхода из залогиненного аккаунта
router.post('/logout', function(req, res, next) {
  req.session.destroy()
  res.locals.user = null
  res.redirect('/')
});



module.exports = router;