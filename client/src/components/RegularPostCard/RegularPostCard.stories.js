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
  title: 'sting',
  imageURL: 'string',
  mountainName: 'string',
  postDate: 'string',
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
    title: '산 탈꼬아',
    imageURL:
      'https://health.chosun.com/site/data/img_dir/2019/04/30/2019043001641_0.jpg',
    mountainName: '인왕산',
    postDate: '2021-04-28T18:55:48.782Z',
  },
};
