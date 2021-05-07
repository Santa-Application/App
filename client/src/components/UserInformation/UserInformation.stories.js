import UserInformation from './UserInformation';

export default {
  title: 'Components/UserInformation',
  component: PublisherInformation,
  argTypes: {
    publisherData: {
      type: { name: '작성자 정보', required: true },
      description: '작성자 정보가 담긴 객체가 전달됩니다.',
      table: {
        type: {
          summary: 'object',
          detail: `{
  publisherName: 'string',
  imageURL: 'string'
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

const Template = args => <UserrInformation {...args} />;

export const Story = Template.bind({});

Story.args = {
  publisherData: {
    publisherName: 'ejinaaa',
    imageURL:
      'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg',
  },
};
