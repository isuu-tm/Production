import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";
import {useTranslation} from "react-i18next";
//


// const Component = () => {
//
//     // let {height:arr, width, title} = { title: "Menu", height: 200, width: 100 }
//     // Деструктиризация обьекта
//     // const [, setCount] = useState()
//
//
// }

const App = () => {

    const {theme} = useTheme(); /* Кастомный хук */


    return (
        <Suspense fallback=''> {/* Properties fallback может быть просто строкой */}
        <div className={classNames('app', { hovered : true}, [theme, 'dadInside'],)}>
            <Navbar/>
            <div className='content-page'>
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
        </Suspense>
    );
};

export default App;