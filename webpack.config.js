module.exports = {
    entry : __dirname + '/src/app.js',
    output : {
      filename : 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        },{
            test: /\.js$/,
            loader : 'babel-loader',
            exclude : /node_modules/,//노드 모듈스 뺴고 하겠다
            query : {
                presets:['es2015']
            }
        }]
    },
    devServer : {
        inline : true,
        port : 7777,
        contentBase : __dirname,
        historyApiFallback : true
    }
};