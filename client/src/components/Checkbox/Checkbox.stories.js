import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    isChecked: {
      type: 'boolean',
      description: '체크 상태를 전달받습니다.',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      action: 'checked!',
      description: '변경 이벤트(함수)를 전달받습니다.(checked상태 업데이트)',
      table: {
        category: 'Events',
        type: { summary: 'function' },
      },
    },
    children: {
      description: '라디오 버튼의 내용을 전달받습니다.',
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Like = Template.bind({});
