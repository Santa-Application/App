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
    id: { type: 'string', description: '식별 가능한 id값은 필수입니다.' },
    label: {
      type: 'string',
      description:
        '사용자에게 정보를 제공하는 label 속성은 필수입니다. 화면에 표시되지 않더라도 스크린 리더 이용자에게 정보를 제공할 수 있습니다.',
    },
    type: {
      type: 'string',
      description: 'input의 타입을 지정할 수 있습니다.',
    },
    labelVisible: {
      type: 'boolean',
      description: 'label을 사용자에게 표시할지 결정합니다.',
    },
    name: {
      type: 'string',
      description:
        '폼 컨트롤 시, 사용자가 입력한 값과 매칭되는 네임 값을 설정합니다.',
    },
  },
};

const Template = args => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  id: 'text',
  label: '텍스트',
  type: 'text',
  labelVisible: false,
  name: 'text',
};

export const Email = Template.bind({});
Email.args = {
  id: 'userEmail',
  label: '이메일 주소',
  type: 'email',
  labelVisible: false,
  name: 'email',
};

export const Password = Template.bind({});
Password.args = {
  id: 'userPassword',
  label: '비밀번호',
  type: 'password',
  labelVisible: false,
  name: 'password',
};
