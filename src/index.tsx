import {render} from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
        {/*    Здесь мы обернули Провайдером чтобы дочерние элементы имели доступ к контексту*/}
        <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'));

/* В методе render, принимает 2 обязательных аргумента
* 1 - элемент
* 2 - куда вставить данный элемент*/
