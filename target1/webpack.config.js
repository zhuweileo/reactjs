var path = require("path");
module.exports={
	entry:{
		"zip":"./app/index.js",
		// "normal":"./app/index.js"
	},
	output:{
		filename:"[name].bundle.js",
		path:path.resolve(__dirname,"dist")
	}
}