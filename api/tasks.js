'use strict';

var express = require('express');
var router = express.Router();

/** [GET] /tasks */
router.route('/tasks').get(function (req, res) {
	res.send();
});

/** [GET] /tasks/<id> */
router.route('/tasks/:id').get(function (req, res) {
	res.send();
});

/** [POST] /tasks */
router.route('/tasks/').post(function (req, res) {
	res.send();
});

/** [PUT] /tasks/<id> */
router.route('/tasks/:id').put(function (req, res) {
	res.send();
});

/** [DELETE] /tasks/<id> */
router.route('/tasks/:id').delete(function (req, res) {
	res.send();
});

module.exports = router;