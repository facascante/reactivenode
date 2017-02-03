"use strict";

const EventEmitter = require('events');
let shortid = require('shortid');
class AppEmitter extends EventEmitter {}

let emitter = new AppEmitter();

/**
 * invokeHook
 * 
 * @param {string} hn
 * 		hook name
 * @param {object} options
 * 		payload object to be pass on to hook
 * @param {function} cb
 * 		callback function to catch async response from these hook
 **/
emitter.invokeHook = function(hn,options,cb){
	
	let unique_id = shortid.generate();
	options.uid = unique_id;
	emitter.once(hn + '_response_' + options.uid,cb);
	emitter.emit(hn + '_request',options);
};

/**
 * registerHook
 * 
 * @param {string} hn
 * 		hook name
 * @param {function} cb
 * 		callback function to catch async response from these hook
 **/
emitter.registerHook = function(hn,cb){
	
	emitter.on(hn + '_request',function(options){
		cb(options,function(err,content){
			emitter.emit(hn + '_response_' + options.uid,err,content);
		});
	});
};

module.exports = emitter;