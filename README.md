# Reactive Node

## Key features

*  Publish an event that notify all listeners and get each listener's responses.

## Example

* Invoke create user event
```js

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
    
```
* Listen to create user event

```js

  emitter.registerHook('db::create',function(options,finish){
		
  	if(db[options.table]){
	   	db[options.table].create(options.content,finish);
	}
	else{
		finish("TABLE_NOT_FOUND");
	}
		
  });
  
```










