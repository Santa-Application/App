import StatusOfApplicationBox from './StatusOfApplicationBox';

export default {
  title: 'Components/StatusOfApplicationBox',
  component: StatusOfApplicationBox,
  argTypes: {
    recruiteesData: {
      type: { name: '모집 신청자 데이터', required: true },
      description: '모집 신청자들의 데이터 정보를 받아옵니다.',
      table: {
        type: {
          summary: 'array',
          detail: `[{
  recruiteeName: 'string',
  recruiteeImageURL: 'string',
  recruiteeId: 'string'
}]`,
        },
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

export const Story = Template.bind({});

Story.args = {
  recruiteesData: [
    {
      recruiteeName: '진영이산탈꼬야',
      recruiteeImageURL:
        'https://images.chosun.com/resizer/6kgnBCClhTSHV5VdRG08jxMjdg8=/528x642/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/RVU3DC6JJM5LQMQKOV3AH5WMKY.jpg',
      recruiteeId: 'jinnnnnn',
    },
    {
      recruiteeName: '은진이산탈꼬야',
      recruiteeImageURL:
        'https://img.fmnation.net/files/attach/images/3399/849/613/020/7d94cca6e44e75b620a2a4f941936d05.png',
      recruiteeId: 'ejinaaa',
    },
  ],
};
