// Story를 구성할 컴포넌트 파일 불러오기
import SelectDate from './SelectDate';

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Form/SelectDate',
  component: SelectDate,
  argTypes: {
    selectedDate: {
      type: 'object',
      description: '선택된 날짜의 상태를 전달 받습니다.',
      table: {
        type: { summary: 'object' },
      },
      contorl: {
        type: 'object',
      },
    },
    handleDateSelect: {
      action: 'click item',
      description:
        '날짜를 클릭하면 실행될 이벤트(함수)를 전달받습니다. (selectedDate의 상태를 업데이트합니다.)',
      table: {
        categroy: 'Events',
        type: { summary: 'function' },
      },
    },
  },
};

const Template = args => <SelectDate {...args} />;

export const selected = Template.bind({});
selected.storyName = 'selected date';
selected.args = {
  selectedDate: new Date(),
};
