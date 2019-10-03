const { src, dest, parallel } = require('gulp')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const sass = require('gulp-sass')

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

function css () {
    return src('./src/css/style.scss')
    .pipe(sass())
    .pipe(dest('./dist/static/css'))
}

exports.js = js
exports.html = html
exports.css = css

exports.default = parallel(js, html, css)