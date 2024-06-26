import { useTranslation } from "react-i18next";
import styles from "./LangSwitcher.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";

type LangSwitcherProps = {
  className?: string,
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
  }

  return (
    <Button
      className={classNames(styles.LangSwitcher, {}, [className])}
      onClick={toggleLanguage}
      theme={ThemeButton.CLEAR}
    >
      {t("Язык")}
    </Button>
  )
}