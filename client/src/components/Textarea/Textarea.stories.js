import Textarea from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    field: {
      table: {
        disable: true,
      },
    },
    inputProps: {
      table: {
        disable: true,
      },
    },
  },
};

export const Story = args => <Textarea {...args} />;
