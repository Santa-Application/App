import { Header } from 'components'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    style: {
      type: {
        name: 'style'
      },
      description: 'Logo에 들어가는 style을 결정합니다. module sass를 전달 받습니다.'
    },
    title: {
      type: {
        name: 'title'
      },
      description: 'Logo에 들어가는 title을 결정합니다. 텍스트 상위로부터 전달 받습니다.'
    },
    href: {
      type: {
        name: 'href'
      },
      description: 'Logo에 들어가는 href(이동하는 URL)을 결정합니다. 상위로부터 전달 받습니다.'
    },
  }
}

const Template = (args) => <Header {...args} />

export const DefaultHeader = Template.bind({})
DefaultHeader.args = {
  title: '산타 애플리케이션 로고',
  href: '/'
}
