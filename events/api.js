var request = require('request');

module.exports = function(emitter){
	
	emitter.registerHook('api::call',function(options,finish){
		
		request(options,function(error,response,body){
			var content = response ? response.body : body;
			finish(error,content);
		});
		
	});
	
};