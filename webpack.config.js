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
	      loader: 'babel-loader?presets[]=es2015,presets[]=stage-0,plugins[]=transform-class-properties,cacheDirectory=.babel-loader-cache',
	    }
	  ]
	}
}
