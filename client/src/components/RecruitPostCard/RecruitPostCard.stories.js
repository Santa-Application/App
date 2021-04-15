import RecruitPostCard from './RecruitPostCard';

export default {
  title: 'Components/RecruitPostCard',
  component: RecruitPostCard,
  argTypes: {
    publisherImageUrl: {
      type: { name: '작성자 프로필 이미지', required: true },
      description: '작성자의 프로필 이미지 경로를 전달받습니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    postData: {
      type: { name: '모집 글 데이터', required: true },
      description: '모집 글 데이터를 객체 형태로 전달받습니다.',
      table: {
        type: {
          summary: 'object',
          detail: `{
          publisherId: 'string',
          publisherName: 'string',
          postingDate: 'Date object',
          views: 'number',
          mountainName: 'string',
          recruitingDate: 'Date object',
          recruitingLevels: 'array',
          recruitingGender: 'string',
          recruitingAge: 'number,
          recruitingNumber: 'number',
          description: 'string',
          recruitees: PropTypes.arrayOf(PropTypes.string),
        }`,
        },
      },
      control: {
        control: 'object',
      },
    },
  },
};

const Template = args => <RecruitPostCard {...args} />;

export const Mobile = Template.bind({});

Mobile.args = {
  publisherImageUrl:
    'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg',
  postData: {
    publisherId: '',
    publisherName: 'ejinaaa',
    postingDate: new Date(),
    views: 16,
    mountainName: '인왕산',
    postTitle: '재밌는 등산 메이트 구해요오~~',
    recruitingDate: new Date(),
    recruitingLevels: ['level1', 'level2'],
    recruitingGender: 'male',
    recruitingAge: { min: 28, max: 35 },
    recruitingNumber: 3,
    description: '',
    recruitees: [],
  },
};
