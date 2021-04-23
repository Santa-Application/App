// Story를 구성할 컴포넌트 파일 불러오기
import Navigation from './Navigation'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    label: {
      description: '메뉴에 대한 설명이 aria-label로 들어갑니다.'
    }
  },
}

const Template = (args) => <Navigation {...args} />

export const Navbar = Template.bind({})
