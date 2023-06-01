// /* Require - это метод который используется в среде node js */
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const path = require('path') /* Здесь path - это утилита которая позволяет легче
// взаимодействовать с путями, потому что некоторые браузеры не поддерживают такие захаркоденные
// пути */
//
// module.exports = {
//     mode: 'development',
//     /* Здесь существуют два значения development или production */
//     entry: path.resolve(__dirname, 'src', 'index.ts'),
//     // entry: {
//     //     RANDOM: path.resolve(__dirname, 'src', 'index.ts')
//     // },
//     /* Здесь dirname это папка в котором мы находимся */
//     output: {
//         filename: "[name].[contenthash].js",
//         path: path.resolve(__dirname, 'build'),
//         clean: true,
//         plugins: [
//             new HtmlWebpackPlugin()
//             /* HtmlWebpackPlugin - это класс */
//         ]
//         /* Плаги это массив потому что их может быть много */
//     }
//     /* Output - это свойство которое определяет куда и как мы будем собирать наш проект */
// }


// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const path = require('path');

import path from 'path' /* При импорте */
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config:webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),

    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html' )
        }),
        new webpack.ProgressPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

export default config;
