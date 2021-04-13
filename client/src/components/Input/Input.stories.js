import Input from './Input';

export default {
  title: 'Components/Form/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Input',
      },
      design: {
        type: 'figma',
        url:
          'https://www.figma.com/file/vMttsM3y4KtX8Ubj6Ij7nJ/Santa?node-id=27%3A430',
      },
    },
    args: {
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
      className: {
        type: 'string',
        description: '사용자 정의 클래스 이름을 설정할 수 있습니다.',
      },
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
  className: 'input',
};

export const Email = Template.bind({});
Email.args = {
  id: 'userEmail',
  label: '이메일 주소',
  type: 'email',
  labelVisible: false,
  className: 'input',
};

export const Password = Template.bind({});
Password.args = {
  id: 'userPassword',
  label: '비밀번호',
  type: 'password',
  labelVisible: false,
  className: 'input',
};
