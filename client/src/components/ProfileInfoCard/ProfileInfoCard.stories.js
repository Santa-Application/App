import ProfileInforCard from './ProfileInfoCard';

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/ProfileInfoCard',
  component: ProfileInforCard,
  args: {
    imageURL: 'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg'
  },
  argTypes: {
    name: {
      name: 'name',
      table: {
        type: { summary: 'string without spaces' },
      },
      control: { type: 'text'},
      description: 'profile user 이름입니다.'
    },
    imageURL: {
      name: 'ImageURL',
      table: {
        type: { summary: 'URL of the image' },
      },
      control: { type: 'text'},
      description: '사용자의 이미지를 나타내는 URL을 값으로 넣어줍니다.'
    },
    age: {
      control: {
        min: 1
      },
      description: 'User의 나이를 숫자 값으로 받습니다.'
    },
    gender: {
      description: 'User의 성별을 표시합니다. 받는 값은 다음과 같습니다.'
    },
    level: {
      description: 'User의 레벨을 표시합니다. string으로 다음의 값을 받습니다.'
    },
    introduction: {
      description: 'User에 대한 본인 소개가 들어갑니다. max-length는 50자입니다.'
    }
  },
}

const Template = (args) => <ProfileInforCard {...args} />

export const Sample = Template.bind({});
