import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    iconSize: {
      type: '아이콘 사이즈',
      description: '아이콘의 사이즈를 지정합니다.',
      table: {
        type: { summary: 'number', detail: `단위는 'rem'입니다.` },
      },
      control: {
        type: 'number',
        min: 1,
        step: 0.1,
      },
    },
    field: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => <RadioButton {...args} />;

export const Female = Template.bind({});
export const Male = Template.bind({});
export const Both = Template.bind({});
export const Level1 = Template.bind({});
export const Level2 = Template.bind({});
export const Level3 = Template.bind({});

Female.args = {
  id: 'female',
};
Male.args = {
  id: 'male',
};
Both.args = {
  id: 'genderBoth',
};
Level1.args = {
  type: 'level1',
};
Level2.args = {
  type: 'level2',
};
Level3.args = {
  type: 'level3',
}
