
let config = {}

let webpackConfig = {}
webpackConfig.entry = './src/vuex.js'
webpackConfig.output = {}
webpackConfig.output.filename = 'vuex.js'
webpackConfig.htmlTemplate = '../src/vuex.template.html'

config.webpackConfig = webpackConfig

module.exports = config
