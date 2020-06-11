const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        // index: './JavaScript/main.js',
        addTodo: './JavaScript/AddTodo.js',
        chat: './JavaScript/Chat.js',
        colors: './JavaScript/Colors.js',
        doneTodo: './JavaScript/DoneTodo.js',
        mobile: './JavaScript/Mobile.js',
        options: './JavaScript/Options.js',
        progress: './JavaScript/Progress.js',
        sidebarNav: './JavaScript/SidebarNav.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../', 'build')
    },
    devServer: {
        open: true,
        // contentBase: path.resolve(__dirname, '../', 'img')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["@babel/preset-env", { useBuiltIns: 'usage', corejs: "2.0.0" }]
                        ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "index.html"
        }),
    ]
}