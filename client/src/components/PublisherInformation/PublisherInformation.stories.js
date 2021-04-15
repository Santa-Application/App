import PublisherInformation from './PublisherInformation';

export default {
  title: 'Components/PublisherInformation',
  component: PublisherInformation,
  argTypes: {
    publisherData: {
      type: { name: '작성자 정보', required: true },
      description: '작성자 정보가 담긴 객체가 전달됩니다.',
      table: {
        type: {
          summary: 'object',
          detail: `{
  name: 'string',
  imageUrl: 'string'
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

const Template = args => <PublisherInformation {...args} />;

export const Review = Template.bind({});

Review.args = {
  publisherData: {
    name: 'ejinaaa',
    imageUrl:
      'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg',
  },
};
