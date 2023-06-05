import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            options.paths.src, 'node_modules'
        ], /* В Modules нужно передать путь до src */
        mainFiles: ['index'], /* Главный файл */
        alias: {} /* Alias это, типа плагина для того чтобы мы указывали импорт при абсолютных путях */
    }
}