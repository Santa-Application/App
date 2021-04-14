import Textarea from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    value: {
      type: '사용자 입력 텍스트',
      description: '사용자가 입력한 텍스트를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    onChange: {
      type: '입력 상태 변경 이벤트',
      description: '변경 이벤트(함수)를 전달받습니다. (checked 상태 업데이트)',
      table: {
        category: 'Event',
        type: { summary: 'function' },
      },
    },
  },
};

const Template = args => <Textarea {...args} />;

export const Text = Template.bind({});
