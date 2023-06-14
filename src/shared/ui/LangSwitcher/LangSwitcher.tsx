import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
};
export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t } = useTranslation()

  const onTranslate = () => {
    void i18n.changeLanguage(i18n.language === 'ru'
      ? 'en'
      : 'ru'
    )
  }

  return (
      <Button
          className={classNames(cls.LangSwitcher, {}, [className])}
          theme={ThemeButton.CLEAR}
          onClick={onTranslate}
        >
          {t('Язык')}
      </Button>
  )
}
