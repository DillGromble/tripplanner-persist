const router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');





router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .then(function(arrayOfPromises) {
    res.send(arrayOfPromises)
  })
  .catch(next);
});





module.exports = router;
