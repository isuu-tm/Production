import {render} from "react-dom";
import {Counter} from "./components/Counter";

render(
    <div>
        <Counter/>
    </div>,
    document.getElementById('root'))

/* В методе render, принимает 2 обязательных аргумента
* 1 - элемент
* 2 - куда вставить данный элемент*/
