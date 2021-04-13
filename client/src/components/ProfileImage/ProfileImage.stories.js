import ProfileImage from './ProfileImage';

export default {
  title: 'ProfileImage',
  component: ProfileImage,
  argTypes: {
    src: {
      type: { name: 'string', required: true },
      description: '이미지 경로를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args) => <ProfileImage {...args} />;

export const Profile = Template.bind({});

Profile.args = {
  src:
    'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg',
};
