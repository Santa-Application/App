import { 
  // RegularPostCard, 
  CarouselSlider,
  Heading
} from 'components';
import {
  heading
} from './ReviewCarousel.module.scss';

const ReviewCarousel = ({ head, slides, slideWidth, ...restProps }) => {
  
  const containerClass = restProps.className;

  // delete interval
  const handleInterval = ({ target }) => {
    console.log(target);
  };

  return (
    <div className={containerClass}>
      <Heading
        level={3}
        content={head}
        className={heading}
      />
      <CarouselSlider 
        slides={slides}
        emulateTouch={true}
        autoPlay={false}
        centerMode={true}
        infiniteLoop={false}
        showArrows={false}
        useKeyboardArrows={true}
        width={slideWidth}
        showThumbs={false}
        showIndicators={false}
        centerSlidePercentage={0}
        dynamicHeight={false}
        interval={0}
        showStatus={false}
        preventMovementUntilSwipeScrollTolerance={true}
        {...restProps}/>
    </div>
  );
};

export default ReviewCarousel;

