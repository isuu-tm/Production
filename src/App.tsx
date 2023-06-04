import React, {Suspense, useContext, useState} from 'react';
import {Counter} from "./components/Counter";
import {Link, Route, Routes} from 'react-router-dom'
import './index.scss'
import {MainAsync} from "./pages/MainPages/Main.async";
import {AboutAsync} from "./pages/AboutPages/About.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {

    const {theme, toggleTheme} = useTheme(); /* Кастомный хук */

    return (
        <div className={classNames('app', { hovered : true}, [theme, 'dadInside'],)}>
            <Suspense fallback={<div>...Загрузка</div>}>
            {
                /* В новых версиях реакт роутера
                обязательно должны быть внутри компонента Routes */
            }
            <Link to='/main'>
                Главная
            </Link>
            <Link to='/about'>
                О нас
            </Link>
                <button onClick={toggleTheme}>
                    Переключить тему
                </button>
            <Routes>
                    <Route path='about' element={<AboutAsync/>}/>
                    <Route path='main' element={<MainAsync/>}/>
            </Routes>

            <Counter/>
            </Suspense>
        </div>
    );
};

export default App;