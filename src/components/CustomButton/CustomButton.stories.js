import CustomButton from './CustomButton.vue'

export default {
  title: 'Atoms/CustomButton',
  component: CustomButton,
  argTypes: {
    label: { description: 'Button label text' },
    color: {
      description: 'Button color type',
      control: { type: 'select', options: ['normal', 'primary', 'error'] }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CustomButton },
  template: `<custom-button v-bind="$props"></custom-button>`
})

// Normal Button
export const Normal = Template.bind({})
Normal.args = {
  label: 'button'
}

// Primary Pattern
export const Primary = Template.bind({})
Primary.args = {
  label: 'button',
  color: 'primary'
}

// Error Pattern
export const Error = Template.bind({})
Error.args = {
  label: 'button',
  color: 'error'
}
