import PostHeading from './PostHeading';

export default {
  title: 'Components/PostHeading',
  component: PostHeading,
  argTypes: {
    postData: {
      type: { name: '포스트 정보', required: true },
      description: '포스트 정보가 담긴 객체가 전달됩니다.',
      table: {
        type: {
          summary: 'object',
          detail: `{
  title: 'string',
  postDate: '날짜 객체를 string타입으로 전달받습니다.',
  views: 'number'
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

const Template = args => <PostHeading {...args} />;

export const Story = Template.bind({});

Story.args = {
  postData: {
    title: '드디어 정상~~~',
    postDate: '2021-04-28T18:55:48.782Z',
    views: 16,
  },
};
