import { RegisterForm } from 'containers'

/* ------------------------------------------------------------------- */

export default {
  title: 'Containers/RegisterForm',
  component: RegisterForm,
  args: {
  },
  argTypes: {
  },
}

const Template = (args) => <RegisterForm {...args} />

export const Basic = Template.bind({})
