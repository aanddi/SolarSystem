var express = require('express');
var router = express.Router();

/* Солнце */
router.get('/sun', function(req, res, next) {
  res.send("<h1>Солнце</h1>")
});

/* Земля */
router.get('/earth', function(req, res, next) {
  res.send("<h1>Земля</h1>")
});

/* Юпитер */
router.get('/jupiter', function(req, res, next) {
  res.send("<h1>Юпитер</h1>")
});

/* Марс */
router.get('/mars', function(req, res, next) {
  res.send("<h1>Марс</h1>")
});

/* Меркурий */
router.get('/mercury', function(req, res, next) {
  res.send("<h1>Меркурий</h1>")
});

/* Нептун */
router.get('/neptune', function(req, res, next) {
  res.send("<h1>Нептун</h1>")
});

/* Сатурн */
router.get('/saturn', function(req, res, next) {
  res.send("<h1>Сатурн</h1>")
});

/* Уран */
router.get('/uranus', function(req, res, next) {
  res.send("<h1>Уран</h1>")
});

/* Венера */
router.get('/venus', function(req, res, next) {
  res.send("<h1>Венера</h1>")
});

module.exports = router;
