import RoundedTextBox from './RoundedTextBox';

export default {
  title: 'Components/RoundedTextBox',
  component: RoundedTextBox,
  argTypes: {
    content: {
      type: '컨텐츠 내용',
      description: '컨텐츠 내용을 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => <RoundedTextBox {...args} />;

export const mountain = Template.bind({});
export const date = Template.bind({});
export const level = Template.bind({});
export const gender = Template.bind({});
export const age = Template.bind({});
export const detail = Template.bind({});

mountain.args = {
  content: '인왕산',
};
date.args = {
  content: '2021/4/23',
};
level.args = {
  content: '초급자 중급자',
};
gender.args = {
  content: '상관없음',
};
age.args = {
  content: '인왕산',
};
detail.args = {
  content: `8시에 등산로 입구에서 집합해서 13시에 정상찍고 16시에는 하산할 예정입니다!
  하산 후 근처에 있는 닭백숙집에서 닭백숙과 소주 한잔
  쒜리삐리빠리뽀~
  준비물은 각자 챙겨오시면되구 정상에서 먹을 도시락은 필수입니다!`,
};
