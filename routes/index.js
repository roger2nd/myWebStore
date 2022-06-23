var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout/landingpage', { title: 'Minha homepage' });
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage', { title: 'Minha homepage' });
});

router.get('/search', function(req, res, next) {
  console.log(req.query.pid);
  res.render('search', { title: 'Shop por categoria' });
});

module.exports = router;
