"use strict";
// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path");
let glob = require('glob')
let version = 1; //请配置活动版本，默认为1
let name = "{{name}}";
let releasePath = "../release/"; //请配置打包后的输出路径
let assetsPath = "/y2017/game/" + name + "/"; //请配置打包后的静态资源挂载路径

//获得入口名
let entry;
for (let n in process.argv) {
    n = process.argv[n]
    if (n.indexOf('ENTRY=') > -1) {
        console.log(n)
        entry = n.split('=')[1];
    }
}

module.exports = {
    entry: './src/entrances/' + entry + '/entry-client.js',
    entryName: entry,
    version: version,
    build: {
        env: require("./prod.env"),
        index: path.resolve(__dirname, "../dist/index.html"),
        assetsRoot: path.resolve(__dirname, releasePath),
        assetsSubDirectory: "static/" + entry,
        assetsPublicPath: assetsPath,
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ["js", "css"],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require("./dev.env"),
        port: process.env.PORT || 7777,
        autoOpenBrowser: true,
        assetsSubDirectory: "static",
        assetsPublicPath: "/",
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
};