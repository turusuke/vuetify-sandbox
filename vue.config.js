module.exports = {
  transpileDependencies: ['vuetify'],
  pages: {
    index: {
      // entry for the page
      title: 'トップページ',
      entry: 'src/pages/index/main.js'
    },
    about: {
      // entry for the page
      title: 'About',
      entry: 'src/pages/about/main.js'
    },
    page_list: {
      // entry for the page
      title: 'ページ一覧',
      entry: 'src/pages/page_list/main.js'
    }
  }
};
