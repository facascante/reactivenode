var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

module.exports = function(options){
	
	var connection = mongoose.createConnection(options.mongourl);
	var user = connection.model('User',new Schema(require('../model/users'),{collection: 'User',versionKey: false}));
	
	return {
		User : user
	};
	
};