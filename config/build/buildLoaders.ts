import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin, { loader } from "mini-css-extract-plugin"

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const typescriptLoaders = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => !!resourcePath.includes(".module"),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]"
          },
        }
      },
      "sass-loader",
    ],
  }

  return [
    typescriptLoaders,
    cssLoaders
  ]
}