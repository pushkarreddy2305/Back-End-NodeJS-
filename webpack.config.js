module.exports = {
    target:'node',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader'
                    options:{
                        presets:['@babel/preset-stage-3','@babel/preset-env'],
                        plugins:['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ],
    }
}
