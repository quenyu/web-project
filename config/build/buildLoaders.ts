import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildFileLoader } from './loaders/buildFileLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const svgLoader = buildSvgLoader();

	const fileLoader = buildFileLoader();

	const typescriptLoaders = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const cssLoaders = buildCssLoader(isDev);

	return [
		typescriptLoaders,
		cssLoaders,
		svgLoader,
		fileLoader,
	];
}
