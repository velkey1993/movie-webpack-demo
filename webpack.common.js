const path = require("path");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src/pages/index.js"),
        about: path.resolve(__dirname, "src/pages/about.js"),
        contact: path.resolve(__dirname, "src/pages/contact.js")
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: {loader: "url-loader"}
            }
        ]
    }
}
