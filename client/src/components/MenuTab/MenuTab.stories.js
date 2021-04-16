// Story를 구성할 컴포넌트 파일 불러오기
import MenuTab from './MenuTab'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/MenuTab',
  component: MenuTab,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
}

const Template = (args) => <MenuTab {...args} />

