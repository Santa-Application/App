import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    level: {
      type: { name: 'number', required: true },
      defaultValue: 2,
      description: '1~6까지 헤딩 레벨을 지정해주세요',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 2 },
      },
      control: { min: 1, max: 6 },
    },
    content: {
      description: '헤딩에 들어갈 텍스트를 설정합니다',
      type: 'string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    className: {
      description: '요소의 클래스 이름을 지정해주세요',
      type: 'string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};

const Template = (args) => <Heading {...args} />;

export const AppHeading = Template.bind({});
export const PageHeading = Template.bind({});
export const FormHeading = Template.bind({});

AppHeading.args = {
  level: 1,
  content: 'SANTA',
};
PageHeading.args = {
  level: 2,
  content: 'Reviews',
};
FormHeading.args = {
  level: 3,
  content: '제목',
};
