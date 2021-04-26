import SignInForm from './SignInForm'

/* ------------------------------------------------------------------- */

export default {
  // 컴포넌트 설명을 입력하면 Storybook에 카테고리 되어 표시됩니다.
  title: 'Containers/SignInForm',
  component: SignInForm,
  argTypes: {
  },
}

const Template = (args) => <SignInForm {...args} />

export const sample = Template.bind({})
