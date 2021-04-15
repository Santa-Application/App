import StatusOfApplicationBox from './StatusOfApplicationBox';

export default {
  title: 'Components/StatusOfApplicationBox',
  component: StatusOfApplicationBox,
  argTypes: {
    images: {
      type: { name: '모집 신청자 데이터', required: true },
      description: '모집 신청자들의 데이터 정보를 받아오니다.',
      table: {
        type: { summary: 'array' },
      },
      control: {
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

const Template = args => <StatusOfApplicationBox {...args} />;

export const Recruit = Template.bind({});

Recruit.args = {
  images: [
    'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg',
    'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg',
  ],
};
