import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { MountainCard } from 'components';
import {
  card
} from './CarouselSlider.module.scss';


const CarouselSlider = ({
  emulateTouch,
  autoPlay,
  centerMode,
  infiniteLoop,
  showArrows,
  useKeyboardArrows,
  width,
  showThumbs
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
    >
      <MountainCard mountainName={'한라산'} to={'/mountain/hanlasan'}/>
      <MountainCard mountainName={'관악산'} to={'/mountain/관악산'}/>
      <MountainCard mountainName={'청계산'} to={'/mountain/청계산'}/>
      <MountainCard mountainName={'미미산'} to={'/mountain/미미산'}/>
      <MountainCard mountainName={'할미산'} to={'/mountain/할미산'}/>
    </Carousel>

  );
};

export default CarouselSlider;
