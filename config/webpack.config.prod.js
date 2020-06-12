const path = require('path');

const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// import path from 'path';

module.exports = {
    mode: 'production',
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
        filename: 'js/[name]-[contenthash].js',
        path: path.resolve(__dirname, '../', 'build')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name][contenthash:6].[ext]',
                            outputPath: 'img',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                quality: 70,
                                progressive: true //zdjecie sie wczytuje z gorszej jakosci az do najlepszej
                            }
                        }
                    }
                ]

            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            useBuiltIns: 'usage',
                            corejs: "2.0.0"
                        }]
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'svg-url-loader',
                    options: {
                        limit: 10000,
                    },
                }, ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css'
        }),
        new CopyPlugin({
            patterns: [{
                from: 'img',
                to: 'img'
            }]
        })
    ]
}