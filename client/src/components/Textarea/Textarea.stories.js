import Textarea from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    value: {
      type: { name: '사용자 입력 텍스트', required: true },
      description: '사용자가 입력한 텍스트를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    onChange: {
      type: { name: '입력 상태 변경 이벤트', required: true },
      description: '변경 이벤트(함수)를 전달받습니다. (checked 상태 업데이트)',
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

export const Story = args => <Textarea {...args} />;
