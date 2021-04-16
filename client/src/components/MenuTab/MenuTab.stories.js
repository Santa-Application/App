// Story를 구성할 컴포넌트 파일 불러오기
import MenuTab from './MenuTab'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/MenuTab',
  component: MenuTab,
  argTypes: {
  },
}

const Template = (args) => <MenuTab {...args} />

export const SampleTab = Template({});