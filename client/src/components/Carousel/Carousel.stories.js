import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import Carousel from './Carousel'
import { MountainCard } from 'components';

/* ------------------------------------------------------------------- */
// storiesOf('Params', module)
//   .addDecorator(StoryRouter())
//   .add('params', () => {
//     <Carousel />
//   })

export default {
  title: 'Components/Carousel',
  component: Carousel,
  args: {
    contents: [
      <MountainCard mountainName={'한라산'} to={'/mountain/hanlasan'}/>,
      <MountainCard mountainName={'관악산'} to={'/mountain/관악산'}/>,
      <MountainCard mountainName={'청계산'} to={'/mountain/청계산'}/>,
      <MountainCard mountainName={'미미산'} to={'/mountain/미미산'}/>,
      <MountainCard mountainName={'할미산'} to={'/mountain/할미산'}/>,
    ]
  },
  argTypes: {
    // contents
  }
}

const Template = (args) => <Carousel {...args} />

export const Sample = Template.bind({});


