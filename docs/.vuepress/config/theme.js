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
            text: '指南',
            link: '/guide/index',
        },
        {
            text: 'tools',
            link: '/tools/数组/chunk转换二维数组',
        },
        {
            text: '国内版',
            link: 'https://qqlcx5.gitee.io/nutils-js-site/',
          },
    ],

    sidebar: {
        '/tools/': tools,
    },
}

module.exports = themeConfig
