const path = require('path');

// import all postcss Plugins
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundled.js'
    },
    devServer: {
        before: function (app, server) {
            server._watch('./app/**/*.html') // watch for html files
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true, // hot reload allowed
        host: '0.0.0.0', // for network access
        port: 8000
    },
    mode: 'development',
    // watch: true,
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