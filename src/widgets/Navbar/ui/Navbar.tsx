import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";


interface NavbarPropsType {
    className?: string;

}

export const Navbar:FC<NavbarPropsType> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to='/main'
                    className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >

                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.RED}
                    to='/about'
                >

                    О нас
                </AppLink>

            </div>
        </div>
    );
};




