const plugins = [
  [
    '@vuepress/last-updated',
    {
      transformer: timestamp => {
        const dayjs = require('dayjs')
        return dayjs(timestamp).format('YYYY-MM-DD HH:mm')
      },
    },
  ],
  ['vuepress-plugin-go-top', {}],
  ['@vuepress/google-analytics', { ga: 'UA-171545170-1' }],
  [
    'notify',
    {
      title: '扫一扫',
      body: [
        {
          type: 'title',
          content: '关注订阅号获取更多福利',
          style: 'text-aligin: center;color: #2878ff;',
        },
        {
          type: 'image',
          src: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/public.jpg',
        },
      ],
      footer: [
        {
          type: 'title',
          content: '免费答疑解惑交流群',
          style: 'text-aligin: center;color: #2878ff;',
        },
        {
          type: 'image',
          src: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/wechat.jpeg',
        },
      ],
    },
  ],

]

module.exports = plugins
