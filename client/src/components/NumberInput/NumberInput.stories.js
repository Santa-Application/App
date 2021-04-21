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
    id: {
      type: 'string',
      description: '식별 가능한 id값을 필수로 전달합니다.',
    },
    // name: {
    //   type: 'string',
    //   description:
    //     '폼 컨트롤 시, 사용자가 입력한 값과 매칭되는 네임 값을 설정합니다.',
    // },
    unit: {
      type: 'string',
      description: 'input 옆에 표시되는 단위를 전달받습니다.',
    },
  },
};

const Template = args => <NumberInput {...args} />;

export const numberInput = Template.bind({});
