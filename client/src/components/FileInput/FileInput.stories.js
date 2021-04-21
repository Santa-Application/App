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
    id: {
      type: 'string',
      description: '식별 가능한 id값을 필수로 전달합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      type: 'string',
      description:
        '사용자에게 정보를 제공할 레이블 설정은 필수로 전달합니다. 화면에 표시되지 않더라도 스크린 리더 사용자에게 정보를 제공합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      type: 'string',
      description:
        '폼 컨트롤 시, 사용자가 입력한 값과 매칭되는 네임 값을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    fileRoute: {
      type: 'string',
      description: '파일의 경로가 표시되는 문자열 상태를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      action: 'change value',
      description:
        '폼 컨트롤의 값이 변경될 때 실행될 이벤트(함수)를 전달받습니다. (fileRoute의 상태를 업데이트합니다.)',
      table: {
        category: 'Events',
        type: { summary: 'function' },
      },
    },
  },
};

const Template = args => <FileInput {...args} />;

export const fileInput = Template.bind({});
fileInput.args = {
  id: 'file',
  label: '파일 선택',
  name: 'file',
  fileRoute: '',
};
