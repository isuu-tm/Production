const path = require('path') /* Здесь path - это утилита которая позволяет легче
взаимодействовать с путями, потому что некоторые браузеры не поддерживают такие захаркоденные
пути */

module.export = {
    mode: 'production',
    /* Здесь существуют два значения development или production */
    entry: path.resolve(__dirname, 'src', 'index.js'),
    // entry: {
    //     RANDOM: path.resolve(__dirname, 'src', 'index.js')
    // },
    /* Здесь dirname это папка в котором мы находимся */
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    }
    /* Output - это свойство которое определяет куда и как мы будем собирать наш проект */
}