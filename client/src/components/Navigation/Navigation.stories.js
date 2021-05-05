import Navigation from './Navigation'
import { useDispatch } from 'react-redux'
import { signinUserAsync } from 'redux/modules/auth'
/* -------------------------------------------------------------------------- */
const mockUser = {
  email: 'storybook@test.com',
  password: 'storybook123!'
}


export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    label: {
      description: '메뉴에 대한 설명이 aria-label로 들어갑니다.'
    },
    onClick: {
      description: '클릭이벤트가 발생했을때 실행될 이벤트 핸들러함수를 전달 받습니다.'
    },
    className: {
      description: '네비게이션에 줄 수 있는 커스터마이제이션 스타일링을 전달 받습니다.'
    }
  },
  decorators: [
    () => {
      const dispatch = useDispatch()
      dispatch(signinUserAsync(mockUser))
    }
  ]
}

const Template = (args) => <Navigation {...args} />

export const Navbar = Template.bind({})
