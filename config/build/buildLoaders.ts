import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const svgLoader = buildSvgLoader();

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

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
