export const buildFileLoader = () => ({
	test: /\.(png|jpe?g|gif|woff|woff2)$/i,
	use: [
		{
			loader: 'file-loader',
		},
	],
});
