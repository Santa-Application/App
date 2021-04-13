// Story를 구성할 컴포넌트 파일 불러오기
import SelectBox from './SelectBox';

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/Form/SelectBox',
  component: SelectBox,
  argTypes: {
    isOpened: {
      type: 'boolean',
      description: '선택 창의 열림 여부를 상태로 전달받습니다.',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    selectItem: {
      type: 'string',
      description: '선택된 옵션을 상태로 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'string',
      },
    },
    handleOpenSelectBox: {
      action: 'open',
      description:
        '선택 창이 열리는 이벤트(함수)를 전달받습니다. (isOpened 상태 업데이트)',
      table: {
        categroy: 'Events',
        type: { summary: 'function' },
      },
    },
    handleClickItem: {
      action: 'click item',
      description:
        '옵션이 선택되는 이벤트(함수) 전달받습니다. (selectItem 상태 업데이트)',
      table: {
        categroy: 'Events',
        type: { summary: 'function' },
      },
    },
    data: {
      type: 'array',
      description: '선택 옵션들을 전달받습니다.',
      table: {
        type: { summary: 'array' },
      },
      control: {
        type: 'array',
      },
    },
  },
};

const Template = args => <SelectBox {...args} />;

export const openedSelectBox = Template.bind({});
openedSelectBox.storyName = 'opened selectBox';
openedSelectBox.args = { isOpened: true };

export const closedSelectBox = Template.bind({});
closedSelectBox.storyName = 'closed selectBox';
closedSelectBox.args = { isOpened: false };
