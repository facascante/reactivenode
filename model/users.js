module.exports = {
		
    "UserName" : {
    	type: String,
        required: true
    },
    "Password" : {
    	type: String,
        required: true
    },
    "CreateAt" : {
        type: Date, 
	    default: Date.now
	},
	"Status" : {
        type: String, 
	    default: 'active'
	}
};