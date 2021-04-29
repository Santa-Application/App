import HikingLevelSelectButton from './HikingLevelSelectButton';
import { Formik, Form } from 'formik';

export default {
  title: 'Components/HikingLevelSelectButton',
  component: HikingLevelSelectButton,
  argTypes: {
    field: {
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
    name: 'hikingLevel'
  }
}