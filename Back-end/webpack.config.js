const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry:['./src/app/index.js'],
    output:{
        path:__dirname + '/public/javascript',
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader'
            }
        },
        {
            test:/\.vue/,
            loader:'vue-loader'
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
    ]
    },
    plugins: [
        new  VueLoaderPlugin()
    ],
};