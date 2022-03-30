
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // This is a development environment
    mode: 'development',

    // Make sure the compiled code points back to the correct uncompiled code
    devtool: 'inline-source-map',

    // This will run a server for us and reload the page on code changes
    devServer: {
        static: './dist',
        liveReload: true
    },

    // Where webpack begins compiling our project
    entry: './src/index.ts',

    module: {
        rules: [
            {
                // Identify typescript files and compile them
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                // Identify images and move them to the correct location
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    // Where our compiled program will be put
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        // Automatically create an HTML template for the game
        new HtmlWebpackPlugin({ title: "threejs-typescript-webpack" }),
    ],
};