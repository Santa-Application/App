import NumberInput from './NumberInput';

export default {
  title: 'Components/Form/NumberInput',
  component: NumberInput,
  parameters: {
    docs: {
      description: {
        component: 'NameInput',
      },
    },
  },
  argTypes: {
    inputProps: {
      type: 'object',
      description: 'input에 필요한 속성들의 객체 모음을 전달받습니다.',
      table: {
        type: { summary: 'object' },
        defaultValue: {
          id: '',
          name: '',
          unit: '',
        },
      },
    },
  },
};

const Template = args => <NumberInput {...args} />;

export const numberInput = Template.bind({});
numberInput.args = {
  id: 'recruitingAge',
  name: 'recruitingAge',
  unit: '세',
};
