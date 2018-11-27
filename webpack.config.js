const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.jsx',
	},
	resolve: {
		extensions: [
			'.js', '.jsx',
		],
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Boilerplate',
		}),
	],
	module: {
		rules: [{
			test: /\.jsx?$/,
			use: ['babel-loader'],
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		}],
	},
};

// module.exports = config
