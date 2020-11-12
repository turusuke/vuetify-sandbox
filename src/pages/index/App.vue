<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <h2 class="heading">トップページ</h2>
      <div class="d-flex justify-space-between">
        <custom-button label="button"></custom-button>
        <custom-button label="error" color="error"></custom-button>
        <custom-button label="primary" color="primary"></custom-button>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import CustomButton from '../../components/CustomButton/CustomButton'
export default {
  name: 'App',

  components: {
    CustomButton
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
