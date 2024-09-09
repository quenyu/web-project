/* eslint-disable no-unused-vars */
declare module '*.scss' {

	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
	import React from 'react';

	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare const Dev: boolean;
declare const Project: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

type OptionalRecord<T extends keyof any, J> = {
  [P in T]?: J;
};
