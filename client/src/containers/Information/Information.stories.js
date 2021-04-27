import Information from './Information';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';


export default {
  title: 'containers/Information',
  component: Information,
}

const Template = (args) => <Information {...args} />

export const Sample = Template.bind({})
