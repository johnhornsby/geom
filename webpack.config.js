module.exports = {
	entry: "./src/index.js",
	output: {
		libraryTarget: "umd",
		path: __dirname + "/dist",
		filename: "geom.js",
		library: "Geom"
	},
	module: {
	  loaders: [
	    {
	      test: /\.js?$/,
	      exclude: /(dist|lib|node_modules)/,
	      loader: 'babel-loader'
	    }
	  ]
	}
}
