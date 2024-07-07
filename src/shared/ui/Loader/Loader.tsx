import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Loader.module.scss"

export const Loader = () => {
  return (
    <span className={classNames(styles.Loader, {}, [])} />
  )
}
