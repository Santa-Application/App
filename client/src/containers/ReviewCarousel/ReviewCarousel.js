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
        infiniteLoop={true}
        showArrows={false}
        useKeyboardArrows={true}
        width={slideWidth}
        showThumbs={false}
        showIndicators={false}
        {...restProps}/>
    </div>
  );
};

export default ReviewCarousel;

