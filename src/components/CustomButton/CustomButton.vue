<template>
  <v-btn
    @click="onClick"
    elevation="2"
    :color="color"
    :disabled="disabled"
    :block="block"
    >{{ label }}</v-btn
  >
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    color: {
      type: String,
      validator: function(value) {
        return ['normal', 'primary', 'error'].indexOf(value) !== -1
      }
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function
    }
  }
}
</script>

<style lang="scss" scoped></style>
