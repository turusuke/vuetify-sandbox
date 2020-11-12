<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div>{{ title1 }}</div>
      <p class="display-1 text--primary">
        {{ title2 }}
      </p>
      <p>{{ subTitle }}</p>
      <div class="text--primary">
        {{ text }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    title1: {
      type: String
    },
    title2: {
      type: String
    },
    subTitle: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped></style>
