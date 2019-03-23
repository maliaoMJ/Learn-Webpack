const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode:"development",
    devtool:'inline-source-map',
    entry:{
        app: "./src/index.js",
        index: "./src/app.js"
    },
    output: {
        publicPath: '/', // cdn
        filename: '[name].[hash].js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules: [
                {
                test: /\.(eot|ttf|woff|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        // placeloader
                        name:'[name].[hash].[ext]',
                        outputPath:"images/"
                    }
                }
            },
            {
                test: /\.(jpg|png|gif)$/,
                use:{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: "images/",
                        limit: 10240
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader',{
                    loader: 'css-loader',
                    options:{
                        importLoaders: 2,
                        // modules: false
                    }
                },'sass-loader','postcss-loader']
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title:"hello webpack",
            template:"./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist/',
        open: true,
        hot:true,
        hotOnly: true
    }
}