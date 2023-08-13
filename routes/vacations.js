var express = require('express');
var router = express.Router();
var vacationCtrl = require('../controllers/vacations')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, vacationCtrl.index);

router.get('/new', ensureLoggedIn, vacationCtrl.new)

router.post('/', ensureLoggedIn, vacationCtrl.vacationCreate)

router.get('/:id', ensureLoggedIn, vacationCtrl.show)

module.exports = router;
