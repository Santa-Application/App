// Story를 구성할 컴포넌트 파일 불러오기
import SelectDate from './SelectDate';

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Form/SelectDate',
  component: SelectDate,
  argTypes: {
    inputProps: {
      type: 'object',
      description: 'input에 필요한 속성들의 객체 모음을 전달받습니다.',
      table: {
        type: { summary: 'object' },
        defaultValue: {
          id: '',
          selectedDate: new Date(),
          setSelectedDate: null,
          onFocus: null,
          onSelect: null,
          setFieldValue: null,
        },
      },
    },
    field: {
      type: 'object',
      description:
        'formik 라이브러리의 <Field/> 컴포넌트의 기본속성인 field 객체를 전달받습니다. 객체 내부에는 `name`, `value`, `onChange`, `onBlur` 프로퍼티들이 있습니다. 상위 컴포넌트에서 `name`속성만 전달하면 되고, input 요소의 onChange 이벤트가 발생하면 `value`는 폼에 자동적으로 제출됩니다.',
    },
  },
};

const Template = args => <SelectDate {...args} />;

export const selected = Template.bind({});
selected.args = {
  inputProps: {
    id: '',
    selectedDate: new Date(),
    setSelectedDate: null,
    onFocus: null,
    onSelect: null,
    setFieldValue: null,
  },
  field: {
    name: 'recruitDate',
  },
};
