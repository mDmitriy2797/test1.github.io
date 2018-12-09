var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Игровые новинки 2018 года' });
});

/* first page. */
router.get('/firstgame', function(req, res, next) {
  res.render('firstgame', { title: 'Overkill’s The Walking Dead',
                            image: 'images/1531138386_overkills-the-walking-dead.jpg'});
});

/* third page. */
router.get('/secondgame', function(req, res, next) {
  res.render('secondgame', { title: 'Shadow Of The Tomb Raider',
                            image1: 'images/1530615711_shadow-of-the-tomb-raider.jpg'});
});

/* second page. */
router.get('/thirdgame', function(req, res, next) {
  res.render('thirdgame', { title: 'We Happy Few',
                            image2: 'images/1530705926_we-happy-few.jpg'});
});

/* fourth page. */
router.get('/fourthgame', function(req, res, next) {
  res.render('fourthgame', { title: 'Just Cause 4',
                            image3: 'images/JustCause41.jpg'});
});

/* fifth page. */
router.get('/fifthgame', function(req, res, next) {
  res.render('fifthgame', { title: 'Red Dead Redemption 2',
                            image4: 'images/ba16459d-2ce0-44a2-b73b-79346f9d01fb.jpg'});
});

module.exports = router;
