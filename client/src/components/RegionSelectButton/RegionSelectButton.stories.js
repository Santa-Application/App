import RegionSelectButton from './RegionSelectButton';

export default {
  title: 'Components/RegionSelectButton',
  component: RegionSelectButton,
  argTypes: {
    type: {
      type: { name: '아이콘 타입', required: true },
      description: '아이콘의 타입을 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      options: [
        'seoul',
        'gangwon',
        'chungcheong',
        'gyeongsang',
        'jeolla',
        'jeju',
      ],
      control: {
        type: 'select',
      },
    },
    content: {
      type: { name: '버튼 콘텐트', required: true },
      description: '버튼의 콘텐트를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'select',
      },
      options: [
        '서울/경기도',
        '강원도',
        '충청도',
        '경상도',
        '전라도',
        '제주도',
      ],
    },
  },
};

const Template = args => <RegionSelectButton {...args} />;

export const Seoul = Template.bind({});
export const Gangwon = Template.bind({});
export const Chungcheong = Template.bind({});
export const Jeolla = Template.bind({});
export const Gyeongsang = Template.bind({});
export const Jeju = Template.bind({});

Seoul.args = {
  type: 'seoul',
  content: '서울/경기도',
};
Gangwon.args = {
  type: 'gangwon',
  content: '강원도',
};
Chungcheong.args = {
  type: 'chungcheong',
  content: '충청도',
};
Jeolla.args = {
  type: 'jeolla',
  content: '전라도',
};
Gyeongsang.args = {
  type: 'gyeongsang',
  content: '경상도',
};
Jeju.args = {
  type: 'jeju',
  content: '제주도',
};
