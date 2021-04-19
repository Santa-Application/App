import RegularPostCard from './RegularPostCard';

export default {
  title: 'Components/RegularPostCard',
  component: RegularPostCard,
  argTypes: {
    postData: {
      type: { name: '리뷰 글 데이터', required: true },
      description: '리뷰 글 데이터를 객체 형태로 전달받습니다.',
      table: {
        type: {
          summary: 'object',
          detail: `{
  postTitle: 'sting',
  imageUrl: 'string',
  mountainName: 'string',
  postingDate: 'Date object',
}`,
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

const Template = args => <RegularPostCard {...args} />;

export const ReviewCard = Template.bind({});

ReviewCard.args = {
  postData: {
    postTitle: '산 탈꼬아',
    imageUrl:
      'https://health.chosun.com/site/data/img_dir/2019/04/30/2019043001641_0.jpg',
    mountainName: '인왕산',
    postingDate: new Date(2021, 3, 24),
  },
};
