import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Story = args => <Footer {...args} />;
