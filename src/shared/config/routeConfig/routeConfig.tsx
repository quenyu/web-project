import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRouts {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRouts, string> = {
	[AppRouts.MAIN]: '/',
	[AppRouts.ABOUT]: '/about',
	[AppRouts.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouts, RouteProps> = {
	[AppRouts.MAIN]: {
		element: <MainPage />,
		path: RoutePath.main,
	},
	[AppRouts.ABOUT]: {
		element: <AboutPage />,
		path: RoutePath.about,
	},
	[AppRouts.NOT_FOUND]: {
		element: <NotFoundPage />,
		path: RoutePath.not_found,
	},
};
