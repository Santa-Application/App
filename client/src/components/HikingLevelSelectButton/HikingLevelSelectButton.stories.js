import HikingLevelSelectButton from './HikingLevelSelectButton';
import { Formik, Form } from 'formik';

export default {
  title: 'Components/HikingLevelSelectButton',
  component: HikingLevelSelectButton,
  argTypes: {
    inputProps: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    Story => (
      <Formik
        initialValues={{
          name: 'hikingLevel',
        }}
      >
        <Form>
          <Story />
        </Form>
      </Formik>
    ),
  ],
};

export const Story = args => <HikingLevelSelectButton {...args} />;

Story.args = {
  inputProps: {
    formType: 'hikingLevel',
    name: 'hikingLevel',
  },
};
