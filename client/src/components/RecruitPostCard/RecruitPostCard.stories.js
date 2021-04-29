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
  publisherInfo: {
    name: 'string',
    imageURL: 'string'
  },
  recruitPost: {

  }
  title: 'string',
  mountainName: 'string',
  recruitDate: 'string',
  recruitingNumber: 'number',
  recruitingGender: 'female, male, genderBoth 중 하나 선택',
  hikingLevel: 'level1, level2, level3 중 하나 선택'
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

export const Story = Template.bind({});

Story.args = {
  postData: {
    recruitPost: {
      title: '재밌는 등산 메이트 구해요오~~',
      mountainName: '인왕산',
      recruitDate: '2021-04-28T18:55:48.782Z',
      recruitingNumber: 3,
      recruitingGender: 'male',
    },
    publisherInfo: {
      imageURL:
        'https://user-images.githubusercontent.com/42370712/116226895-7f6d5b80-a78e-11eb-95cd-323c8fe8bfbc.jpg',
      name: '동원참치',
    },
  },
};
