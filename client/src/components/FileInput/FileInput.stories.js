import FileInput from './FileInput';

export default {
  title: 'Components/Form/FileInput',
  component: FileInput,
  parameter: {
    docs: {
      description: {
        component: 'FileInput',
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
          label: '',
          fileRoute: '',
          onChange: null,
        },
      },
      field: {
        type: 'object',
        description:
          'formik 라이브러리의 <Field/> 컴포넌트의 기본속성인 field 객체를 전달받습니다. 객체 내부에는 `name`, `value`, `onChange`, `onBlur` 프로퍼티들이 있습니다. 상위 컴포넌트에서 `name`속성만 전달하면 되고, input 요소의 onChange 이벤트가 발생하면 `value`는 폼에 자동적으로 제출됩니다.',

        table: { summary: 'object' },
      },
    },
  },
};

const Template = args => <FileInput {...args} />;

export const fileInput = Template.bind({});
fileInput.args = {
  inputProps: {
    id: 'file',
    label: '파일 선택',
    name: 'file',
    fileRoute: '',
    onChange: null,
  },
};
