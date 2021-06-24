module.exports = {
  base: '/studyblog2/',
  // 页面标题
  title: '乱舞春秋·Will',
  // 网页描述
  description: 'Welcome 2 Will\'s World^_^',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon2.jpg' }]
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  themeConfig: {
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    sidebar: {
      '/tools4efficiency/各种常用命令/': [
        'cmd-in-common-use'
      ],
      '/tools4efficiency/各种配置/': [
        'configure-in-common-use'
      ],
      '/tools4efficiency/技术书籍Handbook/': [
        'handbook'
      ],
      '/tools4efficiency/优秀博客/': [
        ''
      ],
      '/research/OMR乐谱识别/moonlight/': [
            '',
            'one',
            'two'
      ],
      '/research/OMR乐谱识别/深度学习/': [
        {
          title: 'LSTM+CTC',
          collapsable: false,
          children: [
            'LSTM+CTC/'
          ]
        },
        {
          title: 'LSTM+CNN',
          collapsable: false,
          children: [
              'LSTM+CNN/'
          ]
        }
      ],

      },
    // 仓库地址
    repo: 'https://github.com/DaveGeneral/studyblog/',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: '编辑此页',
    // 导航
    nav: [
      { text: '小打卡工作沉淀',link: '/小打卡工作沉淀/'},
      { text: '书籍', items: [
          { text: '你不知道的JavaScript(上)', link: '/书籍/你不知道的javascript上'},
          { text: '你不知道的JavaScript(中)', link: '/书籍/你不知道的javascript中'},
          { text: '你不知道的JavaScript(下)', link: '/书籍/你不知道的javascript下'}
        ]
      },
      { text: '数据结构和算法', link: '/数据结构和算法/'},
      { text: '效率提升实用工具箱', items: [
          { text: '频繁使用命令', link: '/效率提升工具箱/各种常用命令/cmd-in-common-use'},
          { text: '频繁使用配置', link: '/效率提升工具箱/各种配置/configure-in-common-use'},
          { text: '技术书籍handbook', link: '/效率提升工具箱/技术书籍handbook/handbook'},
          { text: '优秀博客', link: '/tools4efficiency/优秀博客/'},

        ]
    },
      { text: '科研',
        items: [
          { text: '目录', link: '/科研/'},
          {text: 'OMR乐谱识别', link: '/科研/OMR乐谱识别/'
            // items: [
            //   { text: 'OMR', link: '/科研/OMR乐谱识别/'},
            //   { text: 'moonlight', link: '/科研/OMR乐谱识别/moonlight/'},
            //   { text: '深度学习', link: '/科研/OMR乐谱识别/深度学习/'},
            // ]
          },
          { text: '推荐系统', link: '/科研/推荐系统/'},
          { text: 'NLP', link: '/科研/NLP/'}
        ]},
      { text: '生活·杂文',link: '/生活·杂文/'},
  ]},
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/生活·杂文',
        '@vue': '../images/vue'
      }
    }
  }
}

function getResearchSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}
