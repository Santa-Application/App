import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  card
} from './CarouselSlider.module.scss';


const CarouselSlider = ({
  slides,
  emulateTouch,
  autoPlay,
  centerMode,
  infiniteLoop,
  showArrows,
  useKeyboardArrows,
  width,
  showThumbs,
  ...restProps
}) => {
  return (
    <Carousel 
      emulateTouch={emulateTouch} 
      autoPlay={autoPlay} 
      centerMode={centerMode} 
      infiniteLoop={infiniteLoop} 
      showArrows={showArrows}
      useKeyboardArrows={useKeyboardArrows}
      width={width}
      showThumbs={showThumbs}
      className={card}
      {...restProps}
    >
      {
        slides.map((slide, index) => slide)
      }
    </Carousel>

  );
};

export default CarouselSlider;
