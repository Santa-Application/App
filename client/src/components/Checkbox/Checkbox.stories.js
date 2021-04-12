import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      type: 'boolean',
      defaultValue: false,
      description: '체크 된 상태인지?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    icon: {
      type: 'boolean',
      defaultValue: false,
      description: '아이콘이 있는지?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    onChange: {
      action: '클릭!',
      description: '클릭했을 때 실행시킬 함수입니다',
      table: {
        category: 'Events',
      },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const LikeCheckbox = Template.bind({});
