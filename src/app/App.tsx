import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";


const App = () => {

    const {theme} = useTheme(); /* Кастомный хук */

    return (
        <div className={classNames('app', { hovered : true}, [theme, 'dadInside'],)}>
            <ThemeSwitcher/>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;