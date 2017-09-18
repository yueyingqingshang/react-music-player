const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:[
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		path.join(__dirname, 'app/index.js')
	],
	output: {
		path: path.join(__dirname ,'/dist/'),
		filename: '[name].js',
		publishPath: '/'
	},
	plugins: [
		new htmlWebpackPlugin({
			template:'./index.tpl.html',
			inject: 'body',
			filename: './index.html'
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('developement')
		})
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react','es2015']
			}
		},{
			test: /\.css$/,
			loader: 'style!css'
		},{
			test: /\.less$/,
			loader: 'style-loader!css-loader!less-loader'
		},{
            test: /\.(mp3|webm|ogg)$/,
            loader: 'file-loader'
        },{
            test: /\.(jpg|png|jpeg)$/,
            loader: 'url-loader'
        }]
	}
};