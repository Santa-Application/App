import Textarea from './Textarea';

export default {
  title: 'Textarea',
  component: Textarea,
  argTypes: {
    value: {
      type: 'string',
      description: '사용자가 입력한 텍스트를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

const Template = args => <Textarea {...args} />;

export const Text = Template.bind({});
