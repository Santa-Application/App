import Button from './Button';
/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
      description: '버튼의 disabled를 설정하는 값입니다.',
      table: {
        type: {
          summary: 'boolean',
        }
      },
    },
    type: {
      table: {
        type: {
          summary: 'text',
        },
      },
      control: { type: 'select' },
      options: ['submit','button', 'reset'],
      description: '버튼의 타입 지정할 수 있습니다.'
    },
    secondary: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description: '버튼의 secondary 스타일을 지정할 수 있습니다.'
    },
    value: {
      table: {
        type: {
          summary: 'text',
        },
      },
      description: '버튼의 기능에 대한 텍스트 설명입니다. <button> element의 value로 들어갑니다.'
    },
    children: {
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
      description: '버튼 내에 들어가는 텍스트입니다.'
    },
    className: {
      table: {
        type: {
          summary: 'text',
        },
      },
      description: '버튼에 커스텀 스타일링을 할 수 있습니다.'
    },
    onClick: {
      table: {
        type: {
          summary: 'function',
        },
      },
      description: 'onClick 이벤트 발생시 발동하는 이벤트함수를 전달 받습니다.'
    },

  },
}

const Template = (args) => <Button {...args} />
export const RegularButton = Template.bind({});
RegularButton.storyName = 'Regular';
RegularButton.args = {
  type: 'submit'
};

export const SecondaryButton = Template.bind({});
SecondaryButton.storyName = 'Secondary';
SecondaryButton.args = {
  type: 'submit',
  secondary: true
};

export const DisabledButton = Template.bind({});
DisabledButton.storyName = 'Disabled';
DisabledButton.args = {
  type: 'submit',
  disabled: true
};
