const { src, dest, parallel } = require('gulp')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')

function js(){
    return src('./src/js/**/*.ts')
        .pipe(webpackStream({
            output:{
                filename:'static/js/bundle.js'
            },

            resolve:{
                extensions:['.ts', '.js', '.json']
            },

            devtool:"source-map",

            module:{
                rules:[
                    {
                        test:/\.ts$/,
                        loader:'ts-loader',
                        exclude: /node_modules/
                    }
                ]
            },
            mode:'production'
        }), webpack)
        .pipe(dest('./dist'))
}

function html(){
    return src('./public/index.html')
        .pipe(dest('./dist'))
}

exports.js = js
exports.html = html

exports.default = parallel(js, html)