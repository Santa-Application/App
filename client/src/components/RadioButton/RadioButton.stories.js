import RadioButton from './RadioButton';

export default {
  title: 'Radio Button',
  component: RadioButton,
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
      action: '체크!',
      description: '변경 이벤트(함수)를 전달받습니다.(checked 상태 업데이트)',
      table: {
        category: 'Event',
        type: { summary: 'function' },
      },
    },
    children: {
      description: '라디오 버튼의 내용을 전달받습니다.',
      control: {
        type: 'radio',
        options: ['여성', '남성', '상관없음'],
      },
    },
  },
};

const Template = (args) => <RadioButton {...args} />;

export const Female = Template.bind({});
export const Male = Template.bind({});
export const Both = Template.bind({});

Female.args = {
  children: '여성',
};
Male.args = {
  children: '남성',
};
Both.args = {
  children: '상관없음',
};
