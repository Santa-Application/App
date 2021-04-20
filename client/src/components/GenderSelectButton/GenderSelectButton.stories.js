import GenderSelectButton from './GenderSelectButton';
import { Form, Formik } from 'formik';

export default {
  title: 'Components/GenderSelectButton',
  component: GenderSelectButton,
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
