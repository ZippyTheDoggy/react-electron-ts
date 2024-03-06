const path = require('path');

module.exports = [
    {
        target: 'electron-main',
        entry: './src/main.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'main.js',
        },
        node: {
            __dirname: false,
            __filename: false,
        },
        resolve: {
            extensions: ['.js']
        }
    },
    {
        target: 'electron-renderer',
        entry: './src/index.tsx',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'index.js',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        }
    }
];