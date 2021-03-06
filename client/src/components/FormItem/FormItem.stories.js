import top100Mountains from 'data/top100Mountains';
import { Form, Formik } from 'formik';
import FormItem from './FormItem';

export default {
  title: 'Components/Form/FormItem',
  component: FormItem,
  argTypes: {
    headingProps: {
      type: {
        name: 'headingProps',
        required: true,
      },
      description:
        '폼을 구성하는 아이템들에 대해 레이블을 대체하는 소제목에 필요한 속성들의 모음 객체입니다.',
      table: {
        type: { summary: 'object' },
      },
      control: {
        type: 'object',
      },
    },
    descProps: {
      type: {
        name: 'descProps',
        required: true,
      },
      description:
        '폼을 구성하는 아이템들의 설명에 필요한 속성들의 모음 객체입니다.',
      table: {
        type: { summary: 'object' },
      },
      control: {
        type: 'object',
      },
    },
    inputProps: {
      type: {
        name: 'inputProps',
        required: true,
      },
      description:
        '폼을 구성하는 아이템의 input에 필요한 속성들의 객체를 전달받습니다.',
      table: {
        type: { summary: 'object' },
      },
      control: {
        type: 'object',
      },
    },
  },
  decorators: [
    Story => (
      <Formik
        initialValues={{
          name: '',
        }}
      >
        <Form>
          <Story />
        </Form>
      </Formik>
    ),
  ],
};

const Template = args => <FormItem {...args} />;

export const Text = Template.bind({});
Text.args = {
  headingProps: {
    level: 3,
    content: '제목',
  },
  descProps: {
    content: '설명',
  },
  inputProps: {
    formType: 'text',
    type: 'text',
    id: 'text',
    name: 'text',
  },
};

export const Email = Template.bind({});
Email.args = {
  headingProps: {
    level: 3,
    content: '이메일',
  },
  descProps: {
    content: '이메일을 입력해주세요.',
  },
  inputProps: {
    formType: 'text',
    type: 'email',
    id: 'email',
    name: 'email',
  },
};

export const password = Template.bind({});
password.args = {
  headingProps: {
    level: 3,
    content: '비밀번호',
  },
  descProps: {
    content: '비밀번호를 입력하세요.',
  },
  inputProps: {
    formType: 'text',
    type: 'password',
    id: 'password',
    name: 'password',
  },
};

export const gender = Template.bind({});
gender.args = {
  headingProps: {
    level: 3,
    content: '제목',
  },
  descProps: {
    content: '설명',
  },
  inputProps: {
    formType: 'gender',
    name: 'gender',
  },
};
export const hikingLevel = Template.bind({});
hikingLevel.args = {
  headingProps: {
    level: 3,
    content: '제목',
  },
  descProps: {
    content: '설명',
  },
  inputProps: {
    formType: 'hikingLevel',
    name: 'hikingLevel',
  },
};

export const number = Template.bind({});
number.args = {
  headingProps: {
    level: 3,
    content: '제목',
  },
  descProps: {
    content: '설명',
  },
  inputProps: {
    formType: 'number',
    name: 'number',
  },
};

export const file = Template.bind({});
file.args = {
  headingProps: {
    level: 3,
    content: '제목',
  },
  descProps: {
    content: '설명',
  },
  inputProps: {
    formType: 'file',
    name: 'file',
  },
};

export const date = Template.bind({});
date.args = {
  headingProps: {
    level: 3,
    content: '제목',
  },
  descProps: {
    content: '설명',
  },
  inputProps: {
    formType: 'date',
    name: 'date',
  },
};

export const rangeSlider = Template.bind({});
rangeSlider.args = {
  headingProps: {
    level: 3,
    content: '제목',
  },
  descProps: {
    content: '설명',
  },
  inputProps: {
    formType: 'rangeSlider',
    name: 'rangeSlider',
  },
};

export const select = Template.bind({});
select.args = {
  headingProps: {
    level: 3,
    content: '제목',
  },
  descProps: {
    content: '설명',
  },
  inputProps: {
    formType: 'select',
    name: 'select',
    datas: top100Mountains,
  },
};

export const textarea = Template.bind({});
textarea.args = {
  headingProps: {
    level: 3,
    content: '제목',
  },
  descProps: {
    content: '설명',
  },
  inputProps: {
    formType: 'textarea',
    name: 'textarea',
  },
};
