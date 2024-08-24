import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
	FaHouse as MainIcon, FaCircleInfo as AboutIcon, FaCircleUser as ProfileIcon,
} from 'react-icons/fa6';
import { TbArticleFilled as ArticleIcon } from 'react-icons/tb';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
	getUserAuthData,
	(userData) => {
		const SidebarItemsList: SidebarItemType[] = [
			{
				path: RoutePath.main,
				text: 'Главная',
				Icon: MainIcon,
			},
			{
				path: RoutePath.about,
				text: 'О сайте',
				Icon: AboutIcon,
			},
		];

		if (userData) {
			SidebarItemsList.push(
				{
					path: RoutePath.profile + userData.id,
					text: 'Профиль',
					Icon: ProfileIcon,
					authOnly: true,
				},
				{
					path: RoutePath.articles,
					text: 'Статьи',
					Icon: ArticleIcon,
					authOnly: true,
				},
			);
		}

		return SidebarItemsList;
	},
);
