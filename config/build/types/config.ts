export type BuildMode = "production" | "development"

export type BuildPath = {
  entry: string,
  build: string,
  html: string,
}

export type BuildEnv = {
  port: number,
  mode: BuildMode,
}

export type BuildOptions = {
  mode: BuildMode,
  paths: BuildPath,
  isDev: boolean,
  port: number,
}