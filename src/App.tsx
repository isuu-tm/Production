import React, {Suspense} from 'react';
import {Counter} from "./components/Counter";
import {Link, Route, Routes} from 'react-router-dom'
import './index.scss'
import About from "./pages/AboutPages/About";
import Main from "./pages/MainPages/Main";
import {MainAsync} from "./pages/MainPages/Main.async";
import {AboutAsync} from "./pages/AboutPages/About.async";

const App = () => {
    return (
        <div className="app">
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