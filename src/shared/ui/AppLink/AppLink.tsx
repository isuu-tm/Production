import { type FC, type PropsWithChildren } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkPropsType extends LinkProps {
  className?: string
  // to: string;
  theme?: AppLinkTheme
}

export const AppLink: FC<PropsWithChildren<AppLinkPropsType>> =
    (props) => {
      const {
        children,
        to,
        className,
        theme = AppLinkTheme.PRIMARY, /* По дефолту */
        ...otherProps
      } = props /* Деструктуризуем данные внутри компонента */

      return (
          <Link
              {...otherProps}
              to={to}
              className={classNames(cls.AppLink, { theme }, [className, cls[theme]])}
            >
              { /* Мы можем передать пачку атрибутов в компонент таким образом */}
              {children}
          </Link>
      )
    }
