const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: ['node_modules', 'src']
    }
};
