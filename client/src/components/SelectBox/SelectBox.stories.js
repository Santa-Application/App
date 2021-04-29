// Story를 구성할 컴포넌트 파일 불러오기
import SelectBox from './SelectBox';

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Form/SelectBox',
  component: SelectBox,
  argTypes: {
    inputProps: {
      type: 'object',
      description: 'input에 필요한 속성들의 객체 모음을 전달받습니다.',
      table: {
        type: { summary: 'object' },
      },
      defaultValue: {
        id: '',
        placeholder: '',
        datas: [],
        setFieldValue: null,
        handleBlur: null,
        handleChange: null,
      },
    },
  },
};

const Template = args => <SelectBox {...args} />;

export const selectBox = Template.bind({});
selectBox.args = {
  id: '',
  placeholder: '',
  datas: [],
  setFieldValue: null,
  handleBlur: null,
  handleChange: null,
};
