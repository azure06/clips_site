/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    themeColor: "#0085FE",
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.ts",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Clips | Light. Multiple features. Runs everywhere.",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, "dist"),
          // List of routes to prerender
          ["/features", "/contact", "/about"],
          {
            // options
          }
        ),
      ],
    };
  },
};
