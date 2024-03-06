import { Config } from "./src/config";

export const defaultConfig: Config = {
  // url: "https://www.builder.io/c/docs/developers",
  // match: "https://www.builder.io/c/docs/**",
  url: "https://docs.rs/notify/latest/notify/all.html",
  match: "https://docs.rs/notify/latest/notify/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
