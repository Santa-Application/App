// Story를 구성할 컴포넌트 파일 불러오기
import RangeSlider from './RangeSlider';

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Form/RangeSlider',
  component: RangeSlider,
  argTypes: {
    currentValue: {
      type: 'arrayOf(number)',
      description: '입력된 숫자값의 상태를 전달받습니다.',
      table: {
        type: { summary: 'array' },
      },
      control: {
        type: 'arrayOf(number)',
      },
    },
    handleChangeSlider: {
      action: 'change',
      description:
        '슬라이더의 값이 변경될 때 실행될 이벤트(함수)를 전달받습니다. (currentValue 상태 업데이트 및 NumberInput의 값이 변경)',
      table: {
        categroy: 'Events',
        type: { summary: 'function' },
      },
    },
    handleChangeMinInput: {
      action: 'change',
      description:
        'number 타입의 input의 최소값이 변경될 때 실행될 이벤트(함수)를 전달받습니다. (currentValue 상태 업데이트 및 슬라이더의 값이 변경)',
      table: {
        categroy: 'Events',
        type: { summary: 'function' },
      },
    },
    handleChangeMaxInput: {
      action: 'change',
      description:
        'number 타입의 input의 최대값이 변경될 때 실행될 이벤트(함수)를 전달받습니다. (currentValue 상태 업데이트 및 슬라이더의 값이 변경)',
      table: {
        categroy: 'Events',
        type: { summary: 'function' },
      },
    },
    handleSelectInput: {
      action: 'click item',
      description:
        'number 타입의 input을 선택했을때 전체 선택되는 이벤트(함수)를 전달받습니다. (selectItem 상태 업데이트)',
      table: {
        categroy: 'Events',
        type: { summary: 'function' },
      },
    },
    content: {
      type: 'string',
      description: 'input 옆에 표시되는 단위를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'string',
      },
    },
  },
};

const Template = args => <RangeSlider {...args} />;

export const rangeSlider = Template.bind({});
rangeSlider.storyName = 'range slider';
