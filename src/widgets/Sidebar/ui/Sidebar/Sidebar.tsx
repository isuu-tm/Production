import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {FC, useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
};
export const Sidebar: FC<SidebarProps> = ({className}) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    /* Состояние для того чтобы, свернут сайдбар или нет*/

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }


    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button
                onClick={onToggle}
            >
                Tg
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            {/*  Здесь будет кнопка для переключения языка  */}
            </div>
        </div>
    );
};

