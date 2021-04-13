import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    isChecked: {
      type: 'boolean',
      description: '체크 된 상태인지?',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    icon: {
      type: 'boolean',
      description: '체크박스 아이콘이 있는지?',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      action: 'checked!',
      description: '체크 했을 때 실행되는 함수입니다',
      table: {
        category: 'Events',
      },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const LikeCheckbox = Template.bind({});
