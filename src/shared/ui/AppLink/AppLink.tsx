import { FC } from "react"
import { Link, LinkProps } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./AppLink.module.scss"

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: string
}

export const AppLink: FC<AppLinkProps> = ({
  children,
  className,
  to,
  theme = AppLinkTheme.PRIMARY
}) => {
  return (
    <Link
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      to={to}
    >
      {children}
    </Link>
  )
}