import MenuTab from './MenuTab'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/MenuTab',
  component: MenuTab,
  argTypes: {
    menus: {
      name: 'menus',
      description: '메뉴에 들어갈 요소들이 있는 배열'
    },
    label: {
      name: 'label',
      description: 'aria-label에 들어갈 요소에 대한 설명'
    },
    selected: {
      name: 'selected',
      description: '요소 중에 선택된 요소의 인덱스가 들어갑니다.',
      control: { type: 'number', min: 0, max: 2 }
    }
  }
}


const Template = (args) => <MenuTab {...args} />

export const SampleTab = Template.bind({});
SampleTab.args = {
  menus: [ 
    { name: 'Overview', href: '/Overview' }, 
    { name: 'Reviews', href: '/Reviews' },
    { name:'Recruits', href: '/Recruits' }
  ],
  label: '산 메뉴 탭',
  selected: 1
}

export const ProfileMenuTab = Template.bind({});
ProfileMenuTab.args = {
  menus: [
    { name: 'recruit', href: '/recruit' },
    { name: 'review', href: '/review' }
  ],
  label: '개인 메뉴 탭',
  selected: 1
}