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
  id: 'level1',
};
Level2.args = {
  id: 'level2',
};
Level3.args = {
  id: 'level3',
};
