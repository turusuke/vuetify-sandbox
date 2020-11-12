<template>
  <v-app>
    <v-main>
      <h2 class="heading">About</h2>
      <Card title1="Card Title" title2="Card Title 2" sub-title="subTitle" />
    </v-main>
  </v-app>
</template>

<script>
import Card from '../../components/Card/Card'
export default {
  name: 'App',

  components: {
    Card
  },

  data: () => ({})
}
</script>

<style lang="scss" scoped>
.heading {
  text-align: center;
  margin: 2em auto;
}
</style>
