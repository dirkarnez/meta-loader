const { resolve } = require("path");
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: resolve(__dirname, "src/index.js"),
    module: {
        rules: [
           {
              test: /\.metajs$/i,
              use: [
                {
                    loader: resolve(__dirname, "..") + "/index.js"
                },
              ],
              exclude: /node_modules/,
           }
        ]
     },
    resolve: {
        extensions: ['.js', '.metajs']
    },
    output: {
        path: resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
};