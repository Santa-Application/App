// Story를 구성할 컴포넌트 파일 불러오기
import RangeSlider from './RangeSlider';

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Form/RangeSlider',
  component: RangeSlider,
  argTypes: {
    inputProps: {
      type: 'object',
      description: 'input에 필요한 속성들의 객체 모음을 전달받습니다.',
      table: {
        type: { summary: 'object' },
        defaultValue: {
          id: '',
          name: '',
          setFieldValue: null,
          currentAge: [],
          setCurrentAge: null,
          onChangeSlider: null,
        },
      },
    },
  },
};

const Template = args => <RangeSlider {...args} />;

export const rangeSlider = Template.bind({});
rangeSlider.storyName = 'range slider';
