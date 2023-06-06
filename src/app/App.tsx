import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";


const App = () => {

    const {theme, toggleTheme} = useTheme(); /* Кастомный хук */

    return (
        <div className={classNames('app', { hovered : true}, [theme, 'dadInside'],)}>
            <Link to='/main'>
                Главная
            </Link>
            <Link to='/about'>
                О нас
            </Link>
            <AppRouter/>
            <button onClick={toggleTheme}>
                Переключить тему
            </button>
        </div>
    );
};

export default App;