var express = require('express');
var router = express.Router();
var config = require("config");

module.exports = function(emitter){
	
	router.get('/create', function(req,res){
		
		emitter.invokeHook('db::create',
			{ 
				"table" : "User",
				"content" : {
			       "UserName": req.query.UserName,
			       "Password": req.query.Password
				}
			},
			function(err,user){
				if(err){
					res.json(err).status(400);
				}
				else{
					res.json(user).status(200);
				}
			}
		);
	    
	 });
	
	
	return router;
};
