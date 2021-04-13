import RegularPostCard from './RegularPostCard';

export default {
  title: 'RegularPostCard',
  component: RegularPostCard,
  argTypes: {
    src: {
      type: { name: 'string', required: true },
      description: '이미지 경로를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    postTitle: {
      type: { name: 'string', required: true },
      description: '포스트 타이틀을 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    postDateInKorean: {
      type: { name: 'string', required: true },
      description: '포스트 된 날짜를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

const Template = args => <RegularPostCard {...args} />;

export const ReviewCard = Template.bind({});

ReviewCard.args = {
  src:
    'https://health.chosun.com/site/data/img_dir/2019/04/30/2019043001641_0.jpg',
  postTitle: '드디어 정상!!!',
  postDate: '2021-4-23',
  mountain: '인왕산',
};
