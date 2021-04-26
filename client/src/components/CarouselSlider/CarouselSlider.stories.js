import CarouselSlider from './CarouselSlider'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/CarouselSlider',
  component: CarouselSlider,
}

const Template = (args) => <CarouselSlider {...args} />

export const Sample = Template.bind({});

Sample.args = {
  emulateTouch: true,
  autoPlay: false,
  centerMode: false,
  infiniteLoop: true,
  showArrows: false,
  useKeyboardArrows: false,
  width: '32rem',
  showThumbs: false
}
