import PostHeading from './PostHeading';

export default {
  title: 'Components/PostHeading',
  component: PostHeading,
  argTypes: {
    postData: {
      type: { name: '포스트 정보', required: true },
      description: '포스트 정보가 담긴 객체가 전달됩니다.',
      table: {
        type: { summary: 'object' },
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

const Template = args => <PostHeading {...args} />;

export const Review = Template.bind({});

Review.args = {
  postData: {
    title: '드디어 정상~~~',
    date: new Date(),
    views: 16,
  },
};
