import { Themes, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg"
import LightThemeIcon from "shared/assets/icons/theme-light.svg"
import { Button, ThemeButton } from "shared/ui/Button/Button";

type ThemeSwitcherProps = {
  className?: string,
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames("", {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Themes.DARK ? <DarkThemeIcon width={30} height={30} /> : <LightThemeIcon width={30} height={30} />}
    </Button>
  )
}