const withLess = require("@zeit/next-less");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./assets/antd-custom.less"), "utf8")
);

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /node_modules\/antd\/lib\/style\/index\.less/,
        path.resolve(__dirname, "./assets/nonGlobalAntDStyles.less")
      )
    );
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals)
      ];
    }
    return config;
  }
});
