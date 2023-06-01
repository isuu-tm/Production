
export type BuildMode = 'production' | 'development'

export interface BuildsPaths {
    entry: string;
    build:string;
    html:string;
}
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildsPaths;
    isDev:boolean;
}