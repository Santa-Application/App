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
  }
}


const Template = (args) => <MenuTab {...args} />

export const SampleTab = Template.bind({});
SampleTab.args = {
  menus: [ 
    { name: 'Overview', path: '/Overview' }, 
    { name: 'Reviews', path: '/Reviews' },
    { name:'Recruits', path: '/Recruits' }
  ],
  label: '산 메뉴 탭',
}

export const ProfileMenuTab = Template.bind({});
ProfileMenuTab.args = {
  menus: [
    { name: 'recruit', path: '/recruit' },
    { name: 'review', path: '/review' }
  ],
  label: '개인 메뉴 탭',
}