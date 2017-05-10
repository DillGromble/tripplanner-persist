const router = require('express').Router();
const Day = require('../../models/days')

router.get('/', function(req, res, next) {
	Day.findAll()
	.then(function(days){
		res.send()
	})
  
});

router.get('/:id', function(req, res, next){

});

router.post('/', function(req, res, next){
	Day.create({
		
	})
})

router.delete('/:id', function(req, res, next){

});

module.exports = router;