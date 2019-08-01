module.exports = {
  plugins: [
    ['@vuepress/medium-zoom', 'flowchart'],
    [
      '@vuepress/last-updated', {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale('zh-CN')
          return moment(timestamp).format('YYYY-MM-DD h:mm:ss a')
        }
      }
    ],
    [
      '@vssue/vuepress-plugin-vssue', {
        // 设置 `platform` 而不是 `api`
        platform: 'github',
        locale: 'zh', // 语言设置
        // 其他的 Vssue 配置
        owner: 'cym-git', // github账户名称
        repo: 'cym-git.github.io', // Github博客仓库
        clientId: '74b59bdd634bffbe5002', // github上面申请的clientId
        clientSecret: 'a6cf61f1223501b85583ab5a8901115e3ad0be05', // github上面申请的clientSecret
      }
    ],
    ['@vuepress/nprogress'],
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      popupComponent: 'MySWUpdatePopup',
      updatePopup: {
        message: "新的风暴已经出现",
        buttonText: "盘他"
      }
    }]
  ]
}