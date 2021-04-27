import RecruitPostCard from './RecruitPostCard';

export default {
  title: 'Components/RecruitPostCard',
  component: RecruitPostCard,
  argTypes: {
    postData: {
      type: { name: '모집 글 데이터', required: true },
      description: '모집 글 데이터를 객체 형태로 전달받습니다.',
      table: {
        type: {
          summary: 'object',
          detail: `{
  publisherImageUrl: 'string',
  postTitle: 'string',
  mountainName: 'string',
  recruitingDate: 'string',
  recruitingNumber: 'number',
  recruitingGender: 'array',
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

const Template = args => <RecruitPostCard {...args} />;

export const Mobile = Template.bind({});

Mobile.args = {
  postData: {
    recruitPost: {
      imageUrl:
        'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg',
      postTitle: '재밌는 등산 메이트 구해요오~~',
      mountainName: '인왕산',
      recruitingDate: '2021년 4월 23일',
      recruitingNumber: 3,
      recruitingGender: 'male',
    },
    publisherInfo: {
      imageURL: 'https://user-images.githubusercontent.com/42370712/116226895-7f6d5b80-a78e-11eb-95cd-323c8fe8bfbc.jpg'
    }
  },
};
