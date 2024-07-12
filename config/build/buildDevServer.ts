import { Configuration as WebServerConfig } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildWebServer(options: BuildOptions): WebServerConfig {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
	};
}
