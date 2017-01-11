module.exports = {
	entry:'./src/main.jsx',
	output:{
		filename:'./dist/bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.jsx$/,
				loader:'babel',
				query:{
					presets:['react','es2015']
				}
			}
		]
	}
}