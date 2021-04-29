import GenderSelectButton from './GenderSelectButton';
import { Form, Formik } from 'formik';

export default {
  title: 'Components/GenderSelectButton',
  component: GenderSelectButton,
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
          name: 'gender',
        }}
      >
        <Form>
          <Story />
        </Form>
      </Formik>
    ),
  ],
};

export const Story = args => <GenderSelectButton {...args} />;

Story.args = {
  inputProps: {
    formType: 'gender',
    name: 'gender',
  },
};
