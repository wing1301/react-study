const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

//创建插件的实例对象
const htmlPlugin = new htmlWebpackPlugin({
    template: path.join(__dirname,'./src/index.html'),
    filename: "index.html"
})

//向外暴露一个打包的配置对象
module.exports = {
    //可选项有development（开发环境，不压缩）和production（生产环境，会压缩）
    mode: 'development',
    plugins: [ htmlPlugin ],
    module: {
        rules: [
            { test: /\.js|jsx$/, use:'babel-loader', exclude: /node_modules/},
        ]
    }

    
}