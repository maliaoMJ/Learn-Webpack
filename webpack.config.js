const path = require('path');
module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules: [
                {
                test: /\.jpeg$/,
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
                        modules: false
                    }
                },'sass-loader','postcss-loader']
            }
        ]
    }
}