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
//     entry: path.resolve(__dirname, 'src', 'index.tsx'),
//     // entry: {
//     //     RANDOM: path.resolve(__dirname, 'src', 'index.tsx')
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
import {buildPlugins} from "./config/build/buildPlugins";
import {buildLoader} from "./config/build/buildLoader";
import {buildResolvers} from "./config/build/buildResolvers";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildsPaths} from "./config/build/types/config";


const paths: BuildsPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

export default (env:BuildEnv) => {

    const mode = env.mode || 'development'
    const isDev = mode === "development"
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;

};
