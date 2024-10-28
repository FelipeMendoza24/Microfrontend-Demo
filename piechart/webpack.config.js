const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 6010
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "piechart",
            filename: "remoteEntry.js",
            exposes: {
                "./PiechartIndex": "./src/index"
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}