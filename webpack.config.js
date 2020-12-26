const path = require('path');

const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-import'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundled.js'
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [{
            test: /\.css$/i,
            use: [
                'style-loader',
                'css-loader?url=false',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: postCSSPlugins
                        }
                    }
                }
            ]
        }]
    }
};