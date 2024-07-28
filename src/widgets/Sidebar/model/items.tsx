import { IconBaseProps, IconType } from 'react-icons';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
	FaHouse as MainIcon, FaCircleInfo as AboutIcon, FaCircleUser as ProfileIcon,
} from 'react-icons/fa6';

export interface SidebarItemType extends IconBaseProps {
  path: string,
  text: string,
  Icon: IconType,
}

export const SidebarItemList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		text: 'Главня',
		Icon: MainIcon,
	},
	{
		path: RoutePath.about,
		text: 'О сайте',
		Icon: AboutIcon,
	},
	{
		path: RoutePath.profile,
		text: 'Профиль',
		Icon: ProfileIcon,
	},
];
