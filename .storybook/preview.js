import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'; // all the css for components

const vuetifyConfig = new Vuetify({
  theme: {
    dark: false
  }
})

Vue.use(Vuetify)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  () => ({
    vuetify: vuetifyConfig,
    template: '<v-app><v-main><story/></v-main></v-app>'
  })
]
