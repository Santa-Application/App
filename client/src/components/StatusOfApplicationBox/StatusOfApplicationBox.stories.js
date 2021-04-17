import StatusOfApplicationBox from './StatusOfApplicationBox';

export default {
  title: 'Components/StatusOfApplicationBox',
  component: StatusOfApplicationBox,
  argTypes: {
    images: {
      type: { name: '모집 신청자 데이터', required: true },
      description: '모집 신청자들의 데이터 정보를 받아옵니다.',
      table: {
        type: { summary: 'array', detail: `['string', 'string']` },
      },
      control: {
        type: 'object',
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
    'https://images.chosun.com/resizer/6kgnBCClhTSHV5VdRG08jxMjdg8=/528x642/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/RVU3DC6JJM5LQMQKOV3AH5WMKY.jpg',
    'https://t1.daumcdn.net/cfile/tistory/9971AF3B5D33F5F334',
  ],
};
