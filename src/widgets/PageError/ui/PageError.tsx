import { classNames } from "shared/lib/classNames/classNames";
import styles from "./PageError.module.scss"
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

export const PageError = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(styles.PageError, {}, [])}>
      <h1 className={styles.PageError__title}>
        {t("Произошла непредвиденная ошибка")}
      </h1>
      <Button
        onClick={reloadPage}
        className={styles.PageError__button}
      >
          { t("Обновить страницу") }
      </Button>
    </div >
  )
}
