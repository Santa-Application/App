import MenuTab from './MenuTab'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/MenuTab',
  component: MenuTab,
  argTypes: {
    currentUrl: {
      type: '현재 디렉토리의 URL',
      required: true, 
      description: '현재 있는 디렉토리의 URL이 전달됩니다.',
      table: {
        type: { summary: 'URL'},
      }
    }
  }
}

const Template = (args) => <MenuTab {...args} />

export const SampleTab = Template({});
