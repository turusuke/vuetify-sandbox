<template>
  <div class="container">
    <h2>ページ一覧</h2>
    <ul>
      <li>
        <span>ページ名</span>
        <span>エントリーポイント</span>
        <span>テンプレート</span>
      </li>
      <li v-for="page in pages" :key="page.entry">
        <span
          ><a :href="`/${page.filename}`">{{ page.title }}</a></span
        >
        <span>{{ page.entry }}</span>
        <span>{{ page.template || 'public/index.html' }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import config from '../../../vue.config';

export default {
  name: 'App',
  data: () => {
    return {
      pages: config.pages
    };
  }
};
</script>

<style scoped>
.container {
  width: 800px;
  margin: 3em auto;
}

ul {
  display: table;
  border: 1px solid #aaa;
  border-collapse: collapse;
}

li {
  line-height: 2;
  display: table-row;
}

li > span {
  padding: 0.2em;
  display: table-cell;
  border-right: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
}
</style>
