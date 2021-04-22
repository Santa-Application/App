import RoundedBox from './RoundedBox';

export default {
  title: 'Components/RoundedBox',
  component: RoundedBox,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => <RoundedBox {...args} />;

export const mountain = Template.bind({});
export const date = Template.bind({});
export const level = Template.bind({});
export const gender = Template.bind({});
export const age = Template.bind({});
export const detail = Template.bind({});

mountain.args = {
  children: '인왕산',
};
date.args = {
  children: '2021/4/23',
};
level.args = {
  children: '초급자 중급자',
};
gender.args = {
  children: '상관없음',
};
age.args = {
  children: '인왕산',
};
detail.args = {
  children: `8시에 등산로 입구에서 집합해서 13시에 정상찍고 16시에는 하산할 예정입니다!
  하산 후 근처에 있는 닭백숙집에서 닭백숙과 소주 한잔
  쒜리삐리빠리뽀~
  준비물은 각자 챙겨오시면되구 정상에서 먹을 도시락은 필수입니다!`,
};
