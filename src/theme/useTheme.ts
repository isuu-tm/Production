import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

export interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}
export function useTheme():UseThemeResult {

    const {theme, setTheme} = useContext(ThemeContext);
    /* Здесь мы достали данные из контекста */
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme) /* LocalStorage SetItem принимает
        2 аргумента: 1 - Ключ, 2 - Значение */
    };

    // Круто ulbi!

    return {
        theme, toggleTheme
    }
};
