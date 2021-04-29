import Input from './Input';

export default {
  title: 'Components/Form/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Input',
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
          type: '',
          id: '',
        },
      },
    },
    field: {
      type: 'object',
      description:
        'formik 라이브러리의 <Field/> 컴포넌트의 기본속성인 field 객체를 전달받습니다. 객체 내부에는 `name`, `value`, `onChange`, `onBlur` 프로퍼티들이 있습니다. 상위 컴포넌트에서 `name`속성만 전달하면 되고, input 요소의 onChange 이벤트가 발생하면 `value`는 폼에 자동적으로 제출됩니다.',
    },
    // id: { type: 'string', description: '식별 가능한 id값은 필수입니다.' },
    // label: {
    //   type: 'string',
    //   description:
    //     '사용자에게 정보를 제공하는 label 속성은 필수입니다. 화면에 표시되지 않더라도 스크린 리더 이용자에게 정보를 제공할 수 있습니다.',
    // },
    // type: {
    //   type: 'string',
    //   description: 'input의 타입을 지정할 수 있습니다.',
    // },
    // labelVisible: {
    //   type: 'boolean',
    //   description: 'label을 사용자에게 표시할지 결정합니다.',
    // },
    // name: {
    //   type: 'string',
    //   description:
    //     '폼 컨트롤 시, 사용자가 입력한 값과 매칭되는 네임 값을 설정합니다.',
    // },
  },
};

const Template = args => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  inputProps: {
    id: 'text',
    type: 'text',
  },
};

export const Email = Template.bind({});
Email.args = {
  inputProps: {
    id: 'userEmail',
    type: 'email',
  },
};

export const Password = Template.bind({});
Password.args = {
  inputProps: {
    id: 'userPassword',
    type: 'password',
  },
};
