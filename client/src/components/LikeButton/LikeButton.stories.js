import LikeButton from './LikeButton';

export default {
  title: 'Components/LikeButton',
  component: LikeButton,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
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

export const Story = args => <LikeButton {...args} />;
