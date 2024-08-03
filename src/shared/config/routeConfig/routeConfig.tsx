import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

type AppRouteProps = RouteProps & {
  authOnly?: boolean,
}

export enum AppRouts {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouts, string> = {
	[AppRouts.MAIN]: '/',
	[AppRouts.ABOUT]: '/about',
	[AppRouts.PROFILE]: '/profile',
	[AppRouts.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouts, AppRouteProps> = {
	[AppRouts.MAIN]: {
		element: <MainPage />,
		path: RoutePath.main,
	},
	[AppRouts.ABOUT]: {
		element: <AboutPage />,
		path: RoutePath.about,
	},
	[AppRouts.PROFILE]: {
		element: <ProfilePage />,
		path: RoutePath.profile,
		authOnly: true,
	},
	[AppRouts.NOT_FOUND]: {
		element: <NotFoundPage />,
		path: RoutePath.not_found,
	},
};
