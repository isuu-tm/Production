
export type BuildMode = 'production' | 'development'

export interface BuildsPaths {
    entry: string;
    build:string;
    html:string;
    src: string;
};

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildsPaths;
    isDev:boolean;
    port: number;
}