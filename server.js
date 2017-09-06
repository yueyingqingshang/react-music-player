const webpack = require('webpack');
const webDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const server = new webDevServer(webpack(config),{
		publicPath: config.output.publishPath,
		inline: true,
		hot: true,
		historyApiFllback: true,
		quiet: false,
		noInfo: false,
		stats: {
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModule: false
		}
	});
server.listen('3000','localhost',function(err) {
	if(err) {
		console.log(err);
	};
	console.log('Listening at localhost:3000');
})