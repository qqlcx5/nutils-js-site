const path = require('path') // 路径模块
const utilsRoot = path.join(__dirname, '..', 'utils')
const docsRoot = path.join(__dirname, '..', '..')
const readFile = require(utilsRoot + '/readFile')

const tools = readFile(docsRoot + '/tools')

const themeConfig = {
    editLinks: true,
    smoothScroll: true,
    lastUpdated: '最后更新时间',
    nav: [
        {
            text: 'tools',
            link: '/tools/arrary/multArray转换二维数组',
        },
    ],

    sidebar: {
        '/tools/': tools,
    },
}

module.exports = themeConfig
