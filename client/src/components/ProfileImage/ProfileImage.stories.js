import ProfileImage from './ProfileImage';

export default {
  title: 'Components/ProfileImage',
  component: ProfileImage,
  argTypes: {
    src: {
      type: { name: '프로필 이미지 경로', required: true },
      description: '프로필 이미지 경로를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    size: {
      type: '프로필 이미지 크기',
      description: '프로필 이미지 크기를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'radio',
        options: ['large', 'medium', 'small'],
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => <ProfileImage {...args} />;

export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});

Large.args = {
  src:
    'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg',
  size: 'large',
};
Medium.args = {
  src:
    'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg',
  size: 'medium',
};
Small.args = {
  src:
    'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg',
  size: 'small',
};
