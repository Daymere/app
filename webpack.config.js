const src = 'src';
const dist = 'public';

const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); ``
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const developmentMode = process.env.NODE_ENV === 'development';
const productionMode = !developmentMode;

module.exports = {
    context: path.resolve(__dirname, src),
    entry: {
        index: "./index.js",
    },
    output: {
        path: path.resolve(__dirname, dist),
        filename: "[name].js",
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                        conditionals: true,
                        unused: true,
                        comparisons: true,
                        dead_code: true,
                        if_return: true,
                        join_vars: true,
                    },
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, src),
        watchContentBase: true,
        inline: true,
        hot: true,
        host: "localhost"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].min.css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    context: "assets/images",
                    from: "**/*.{svg,png,jpeg,jpg,webp,gif}",
                    to: "assets/images",
                    noErrorOnMissing: true
                },
                {
                    context: "assets/fonts",
                    from: "**/*.{ttf,woff,woff2,eot}",
                    to: "assets/fonts",
                    noErrorOnMissing: true
                },
                {
                    from: "./*.{svg,png,jpeg,jpg,webp,gif}",
                    to: "./",
                    noErrorOnMissing: true
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: "index.html",
            title: "Digital.",
            minify: {
                collapseWhitespace: productionMode
            },
            favicon: "./favicon.png"
        }),
        new HotModuleReplacementPlugin(),
        new CssMinimizerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|jpe?g|png|svg|webp)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]",
                    }
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ],
                        plugins: [
                            "@babel/plugin-proposal-private-methods",
                            "@babel/plugin-proposal-class-properties",
                        ]
                    }
                }
            }
        ]
    }
}