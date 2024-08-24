import { IconBaseProps, IconType } from 'react-icons';

export interface SidebarItemType extends IconBaseProps {
  path: string,
  text: string,
  Icon: IconType | string,
  authOnly?: boolean,
}
