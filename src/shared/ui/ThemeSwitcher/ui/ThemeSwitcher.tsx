import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {FC} from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from './../../../assets/icons/dark.svg'
import LightIcon from './../../../assets/icons/light.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps  {
    className?:string;
};
export const ThemeSwitcher:FC<ThemeSwitcherProps> = ({className}) => {

    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {
                theme === Theme.DARK
                    ? <DarkIcon/>
                    : <LightIcon/>
            }
            Переключить тему
        </Button>
    );
};

// import {classNames} from "shared/lib/classNames/classNames";
// import cls from './ThemeSwitcher.module.scss'
// import {FC} from "react";
//
// interface ThemeSwitcherProps  {
//     className?:string;
// };
// export const ThemeSwitcher:FC<ThemeSwitcherSwitcherProps> = ({className}) => {
//     return (
//         <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
//
//         </div>
//     );
// };

// import {classNames} from "shared/lib/classNames/classNames";
// import cls from './$File$.module.scss'
// import {FC} from "react";
//
// interface $File$Props  {
//     className?:string;
// };
// export const $File$:FC<$File$SwitcherProps> = ({className}) => {
//     return (
//         <div className={classNames(cls.$File$, {}, [className])}>
//
//         </div>
//     );
// };