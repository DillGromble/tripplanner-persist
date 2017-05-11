const router = require('express').Router();
const Day = require('../../models/days')

router.get('/', function(req, res, next) {
	Day.findAll()
	.then(function(days){
		res.send(days)
	})
	.catch(next);
});

router.get('/:id', function(req, res, next){
	Day.findOne({
		where: {
			number: req.params.id
		}
	})
	.then( function (day) {
		res.send(day)
	})
	.catch(next);
});

router.post('/:id', function (req, res, next) {

	Day.findOne({
		where: {number: req.params.id}
	})
	.then( day => {
		day.update({ hotelId: req.body.attId })
	})
	.catch(next)
})




router.post('/', function(req, res, next){
	Day.create(req.body)
	.then( data => res.send(data))
	.catch(next);
})

router.delete('/:id', function(req, res, next){

});

module.exports = router;
