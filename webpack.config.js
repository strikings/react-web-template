const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
    template: path.join(__dirname, './src/index.html'), // 指定模板文件
    filename: 'index.html' // 指定内存中生成的首页的名称
})

// 导入webpack的配置对象
module.exports = {
    // 必须要有mode属性：有两个可选值  development   production
    mode: 'development',
    // 注意：默认4.x 的webpack中，约定了打包的入口是 src->index.js 出口是dist->main.js
    // 插件节点
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            { test: /\.jpg|png|gif|bmp|webp$/, use: 'url-loader' }, // 处理图片
            { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, // 处理字体文件
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] }, // 处理普通css样式表
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[path][name]-[local]-[hash:5]"
                            }
                        }
                    }],   //打包处理css样式表的第三方loader
            },
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ } // babel-loader
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 可省略的扩展名
        alias: {
            '@': path.join(__dirname, './src') // 设置别名
        }
    }
}