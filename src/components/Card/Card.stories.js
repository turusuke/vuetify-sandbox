import Card from './Card.vue'

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: `<Card v-bind="$props"></Card>`
})

// Normal Button
export const Normal = Template.bind({})
Normal.args = {
  title1: 'title-1',
  title2: 'title-2',
  subTitle: 'subTitle',
  text: 'sample text sample text sample text sample text sample text'
}
