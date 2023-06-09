import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPages";
import {MainPage} from "pages/MainPages";
import React, {FC, Suspense} from "react";
import {routeConfig} from "shared/config/routeConfig/routeConfig";


const AppRouter: FC = () => {
    return (
        <Suspense fallback={<div>...Загрузка</div>}>
            {
                /* В новых версиях реакт роутера
                обязательно должны быть внутри компонента Routes */
            }
            <Routes>
                <Route path='about' element={<AboutPage/>}/>
                <Route path='main' element={<MainPage/>}/>
                {
                    Object.values(routeConfig).map(({element, path}) => (
                        <Route
                            key={path}
                            /*  Ключ должен быть уникальным чтобы реакт эффективно рисовал наше приложение*/
                            path={path}
                            element={
                                <div className='page-wrapper'>
                            {element}
                        </div>
                }
            />
            ))
            }
            {/*  Object values - итерируется по массиву и преоброзовывает в массив  */}
        </Routes>
</Suspense>
)
}

export default AppRouter;