// Story를 구성할 컴포넌트 파일 불러오기
import { Header } from 'components'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
  },
}

const Template = (args) => <Header {...args} />

export const DefaultHeader = Template.bind({})
