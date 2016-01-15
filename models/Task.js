var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
	title: String,
	description: String,
	completed: Boolean,
	created: Date
});

module.exports = mongoose.model('Task', TaskSchema);