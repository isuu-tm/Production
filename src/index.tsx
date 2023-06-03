import {render} from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root'));

/* В методе render, принимает 2 обязательных аргумента
* 1 - элемент
* 2 - куда вставить данный элемент*/
