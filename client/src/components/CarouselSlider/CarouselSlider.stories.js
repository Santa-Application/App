import CarouselSlider from './CarouselSlider'
import { MountainCard } from 'components'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/CarouselSlider',
  component: CarouselSlider,
}

const Template = (args) => <CarouselSlider {...args} />

export const Sample = Template.bind({});
Sample.args = {
  slides: [
    <MountainCard key={'MountainCard-1'} to={'/'}/>,
    <MountainCard key={'MountainCard-2'} to={'/'}/>,
    <MountainCard key={'MountainCard-3'} to={'/'}/>,
    <MountainCard key={'MountainCard-4'} to={'/'}/>,
  ],
  emulateTouch: true,
  autoPlay: false,
  centerMode: false,
  infiniteLoop: true,
  showArrows: false,
  useKeyboardArrows: false,
  width: '32rem',
  showThumbs: false
}
export const Posts = Template.bind({});
Posts.args = {
  slides: [

  ]
}
