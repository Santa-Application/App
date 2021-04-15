import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    level: {
      type: '헤딩 레벨',
      required: true,
      description: '헤딩 레벨을 전달받습니다.',
      table: {
        type: { summary: 'number' },
      },
      control: { min: 1, max: 6 },
    },
    children: {
      type: '헤딩 텍스트',
      description: '헤딩에 들어갈 텍스트를 설정합니다',
      table: {
        type: { summary: 'string' },
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
  children: 'SANTA',
};
PageHeading.args = {
  level: 2,
  children: 'Reviews',
};
FormHeading.args = {
  level: 3,
  children: '제목',
};
