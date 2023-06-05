import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";
/* Относительные импорты */


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
/* В коде выше написано, что воспринимай это как перечисление enum */

    const ThemeProvider:FC<PropsWithChildren> = ({children}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme)
    /* Код выше, состояние для того чтобы динамически изменять темы */


    const defaultProps = useMemo(() => ({
        theme:theme,
        setTheme:setTheme,
        /* Это провайдер! - из за того что мы передаем здесь обьект при каждом рендере компонент будет
        рендерится заново и будет тратить ресурсы устройства, решить проблему можно с помощью useMemo */
    }), [theme])

    return (
        <ThemeContext.Provider
            value={defaultProps}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;