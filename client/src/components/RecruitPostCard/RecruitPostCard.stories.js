import RecruitPostCard from './RecruitPostCard';

export default {
  title: 'Components/RecruitPostCard',
  component: RecruitPostCard,
  argTypes: {
    src: {
      type: { name: '유저 프로필 이미지 경로', required: true },
      description: '프로필 이미지 경로를 전달받습니다.',
      table: { summary: 'string' },
      control: {
        type: 'text',
      },
    },
    postTitle: {
      type: { name: '모집 포스트 제목', required: true },
      description: '포스트 제목을 전달받습니다.',
      table: { summary: 'string' },
      control: {
        type: 'text',
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
    postDate: {
      type: { name: '모집 날짜', required: true },
      description: '모집 하는 날짜를 전달받습니다.',
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
    person: {
      type: { name: '모집 인원', required: true },
      description: '인원 수를 전달받습니다.',
      table: { summary: 'number' },
      control: {
        type: 'number',
        min: 1,
      },
    },
    gender: {
      type: { name: '모집 성별', required: true },
      description: '성별을 전달받습니다.',
      table: { summary: 'string' },
      control: {
        type: 'radio',
        options: ['female', 'male', 'genderBoth'],
      },
    },
  },
};

const Template = args => <RecruitPostCard {...args} />;

export const Mobile = Template.bind({});

Mobile.args = {
  src:
    'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg',
  postTitle: '재밌는 등산 메이트 모집해요~',
  mountainName: '인왕산',
  postDate: new Date(),
  person: 2,
  gender: 'genderBoth',
  style: { width: '320px' },
};
