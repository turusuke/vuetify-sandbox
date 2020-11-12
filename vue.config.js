module.exports = {
  transpileDependencies: ['vuetify'],
  pages: {
    index: {
      title: 'TOP Page',
      entry: 'src/pages/index/main.js'
    },
    about: {
      title: 'About',
      entry: 'src/pages/about/main.js'
    },
    page_list: {
      title: 'ページ一覧',
      entry: 'src/pages/page_list/main.js'
    }
  }
}
