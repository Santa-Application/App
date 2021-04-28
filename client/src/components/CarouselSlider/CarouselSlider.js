import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  card
} from './CarouselSlider.module.scss';
import { useEffect } from 'react';

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
  // 접근성 관련 코드
  const handleLoadCarousel = ({ target }) => {
    const $lis = document.querySelectorAll('li.dot');
    const $liItems = document.querySelectorAll('li.slide');
    const $aItems = document.querySelectorAll('li.slide > a');

    $lis.forEach($li => $li.removeAttribute('role'));
    $aItems.forEach(($a, index) => $a.setAttribute('aria-label', `${index + 1} of ${$liItems.length}`));
  };

  useEffect(() => {
    window.addEventListener('load', handleLoadCarousel);

    return () => {
      window.removeEventListener('load', handleLoadCarousel);
    };
  }, []);

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
      labels={{
        leftArrow: 'previous slide / item',
        rightArrow: 'next slide / item', 
        item: 'slide item'
      }}
      {...restProps}
    >
      {
        slides.map((slide, index) => {
          return slide;
        })
      }
    </Carousel>
  );
};

export default CarouselSlider;
