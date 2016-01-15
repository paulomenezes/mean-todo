'use strict';

var express = require('express');
var router = express.Router();

var Task = require('../models/task');

/** [GET] /tasks */
router.route('/tasks').get(function (req, res) {
	Task.find(function (erro, tasks) {
		if (erro) {
			res.send(erro);
		}

		res.json(tasks);
	})
});

/** [GET] /tasks/<id> */
router.route('/tasks/:id').get(function (req, res) {
	Task.findById(req.params.id, function (erro, task) {
		if (erro) {
			res.send(erro);
		}

		res.json(task);
	});
});

/** [POST] /tasks */
router.route('/tasks/').post(function (req, res) {
	var task = new Task();
	task.title = req.body.title;
	task.description = req.body.description;
	task.completed = req.body.completed;
	task.created = new Date;

	task.save(function (erro) {
		if (erro) {
			res.send(erro);
		}

		res.json({ id: task._id });
	});
});

/** [PUT] /tasks/<id> */
router.route('/tasks/:id').put(function (req, res) {
	Task.findById(req.params.id, function (erro, task) {
		if (erro) {
			res.send(erro);
		}

		task.title = req.body.title;
		task.description = req.body.description;
		task.completed = req.body.completed;
		task.created = new Date;

		task.save(function (erro) {
			if (erro) {
				res.send(erro);
			}

			res.json({ message: 'Tarefa atualizada!' });
		})
	});
});

/** [DELETE] /tasks/<id> */
router.route('/tasks/:id').delete(function (req, res) {
	Task.remove({ _id: req.params.id }, function (erro) {
		if (erro) {
			res.send(erro);
		}

		res.json({ message: 'Tarefa deletada' });
	});
});

module.exports = router;