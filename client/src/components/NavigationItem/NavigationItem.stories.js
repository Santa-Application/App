import { NavigationItem } from 'components';

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/NavigationItem',
  component: NavigationItem,
  argTypes: {
    shape: {
      description: '네비게이션 메뉴에 들어가는 icon의 모양을 결정합니다.'
    },
    title: {
      description: '아이콘 우측에 있는 텍스트를 의미하며 아이콘의 title요소로도 쓰입니다.'
    }
  }
}

const Template = (args) => <NavigationItem {...args} />

export const Sample = Template.bind({});
Sample.args = {
  shape: 'navMountains',
  title: 'mountain'
}