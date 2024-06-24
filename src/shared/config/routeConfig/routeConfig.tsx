import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRouts {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRouts, string> = {
  [AppRouts.MAIN]: "/",
  [AppRouts.ABOUT]: "/about",
}

export const routeConfig: Record<AppRouts, RouteProps> = {
  [AppRouts.MAIN]: {
    element: <MainPage />,
    path: RoutePath.main,
  },
  [AppRouts.ABOUT]: {
    element: <AboutPage />,
    path: RoutePath.about,
  },
}