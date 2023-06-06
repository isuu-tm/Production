import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPages";
import {AboutPage} from "pages/AboutPages";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}
/* Enum - это перечисление где мы можем, перечислить ряд каких то параметров */

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN] : '/',
    [AppRoutes.ABOUT]: '/about',
    /* Получается у нас значение, это тип AppRoute */
}


export const routeConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN] : {
        path: RoutePath.main,
        element:<MainPage/>
    },
    [AppRoutes.ABOUT] : {
        path: RoutePath.about,
        element:<AboutPage/>
    },

}


/* Record - это озночает два ограниченных типов в ts ниже пример, где первый это ключ а второй значение - value*/
// interface CatInfo {
//     age: number;
//     breed: string;
// }
//
// type CatName = "miffy" | "boris" | "mordred";
//
// const cats: Record<CatName, CatInfo> = {
//     miffy: { age: 10, breed: "Persian" },
//     boris: { age: 5, breed: "Maine Coon" },
//     mordred: { age: 16, breed: "British Shorthair" },
// };

