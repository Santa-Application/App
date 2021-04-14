import RegularPostCard from './RegularPostCard';

export default {
  title: 'Components/RegularPostCard',
  component: RegularPostCard,
  argTypes: {
    src: {
      type: { name: '리뷰 포스트 이미지 경로', required: true },
      description: '이미지 경로를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    postTitle: {
      type: { name: '리뷰 포스트 제목', required: true },
      description: '포스트 타이틀을 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    postDate: {
      type: { name: '포스트된 날짜', required: true },
      description: '포스트 된 날짜 객체를 전달받습니다.',
      table: {
        type: {
          summary: 'object',
          detail: 'Date 객체를 전달받습니다.',
        },
      },
      control: {
        disable: true,
      },
    },
    mountainName: {
      type: { name: '산 이름', required: true },
      description: '산 이름을 전달받습니다.',
      table: { summary: 'string' },
      control: {
        type: 'text',
      },
    },
    containerClassName: {
      table: {
        disable: true,
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
  postDate: new Date(),
  mountainName: '인왕산',
};
