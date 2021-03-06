import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    level: {
      type: { name: '헤딩 레벨', required: true },
      description: '헤딩 레벨을 전달받습니다.',
      table: {
        type: { summary: 'number' },
      },
      control: { type: 'number', min: 1, max: 6 },
    },
    content: {
      type: '헤딩 텍스트',
      description: '헤딩에 들어갈 텍스트를 설정합니다',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => <Heading {...args} />;

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
