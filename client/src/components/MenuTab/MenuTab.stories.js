import MenuTab from './MenuTab'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/MenuTab',
  component: MenuTab,
  argTypes: {
    menus: {
      name: 'menus',
      control: { type: text },
      description: 'menu tab안의 요소들을 나타내는 배열이 들어갑니다.',
      table: {
        type: {
          summary: 'array',
          detail: '배열 내의 각 요소는 객체입니다. name과 href가 들어갑니다.'
        }
      }
    },
    label: {
      name: 'label',
      description: 'aria-label에 들어갈 요소에 대한 설명'
    },
    selected: {
      name: 'selected',
      description: '요소 중에 선택된 요소의 인덱스가 들어갑니다.'
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