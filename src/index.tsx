import {render} from "react-dom";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

// import i18n from "shared/config/i18/i18n"; Здесь может вылезти ошибка нужно импортировать так
import  "shared/config/i18/i18n";

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
