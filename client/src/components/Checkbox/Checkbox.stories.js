import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    checked: {
      type: '체크 상태',
      description: '체크 상태를 전달받습니다.',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      type: '체크 상태 이벤트 핸들러',
      description: '체크 상태 변경 이벤트 핸들러를 전달받습니다.',
      table: {
        category: 'Events',
        type: { summary: 'function' },
      },
      control: {
        disable: true,
      },
    },
    checkboxIcon: {
      type: '체크 버튼 아이콘',
      description: '체크 버튼의 아이콘 타입을 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'select',
        options: ['likeTrue', 'likeFalse'],
      },
    },
    children: {
      type: '체크 버튼 내용',
      description:
        '체크 버튼의 내용을 지정합니다. 텍스트나 아이콘 요소가 들어오게 됩니다.',
      table: { summary: 'string' },
      control: {
        type: 'text',
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => <Checkbox {...args} />;

export const LikeFalse = Template.bind({});
export const LikeTrue = Template.bind({});

LikeFalse.args = {
  id: 'likeFalse',
  checkboxIcon: 'likeFalse',
  checked: false,
};
LikeTrue.args = {
  id: 'likeTrue',
  checkboxIcon: 'likeTrue',
  checked: true,
};
