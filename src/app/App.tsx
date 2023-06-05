import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPages";
import {MainPage} from "pages/MainPages";


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
                    <Route path='about' element={<AboutPage/>}/>
                    <Route path='main' element={<MainPage/>}/>
            </Routes>

            </Suspense>
        </div>
    );
};

export default App;