import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Sidebar.module.scss"
import { useState } from "react"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"

type SidebarProps = {
  className?: string,
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggleSidebar = () => {
    setCollapsed(!collapsed)
  }


  return (
    <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
      <button onClick={onToggleSidebar}>Toggle Sidebar</button>
    </div>
  )
}