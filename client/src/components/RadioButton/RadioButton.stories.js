import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    type: {
      type: { name: '라디오 버튼 타입', required: true },
      description: '라디오 버튼의 타입을 지정합니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'radio',
        options: ['female', 'male', 'genderBoth'],
      },
    },
    iconSize: {
      type: '아이콘 사이즈',
      description: '아이콘의 사이즈를 지정합니다.',
      table: {
        type: { summary: 'number', detail: `단위는 'rem'입니다.` },
      },
      control: {
        type: 'number',
        min: 1,
        step: 0.1,
      },
    },
    checked: {
      type: { name: '체크 상태', required: true },
      description: '체크 상태를 전달받습니다.',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      type: { name: '체크 상태 변경 이벤트 핸들러', required: true },
      description: '체크 상태 변경 이벤트 핸들러를 전달받습니다.',
      table: {
        category: 'Event',
        type: { summary: 'function' },
      },
      control: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => <RadioButton {...args} />;

export const Female = Template.bind({});
export const Male = Template.bind({});
export const Both = Template.bind({});

Female.args = {
  type: 'female',
};
Male.args = {
  type: 'male',
};
Both.args = {
  type: 'genderBoth',
};
