const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', // Вставляє CSS в DOM
                    'css-loader',   // Перетворює CSS в CommonJS
                    'sass-loader',  // Компілює Sass в CSS
                ],
            },
        ],
    },
};