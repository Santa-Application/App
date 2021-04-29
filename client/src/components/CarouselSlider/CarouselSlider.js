import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { card } from './CarouselSlider.module.scss';
import { useEffect } from 'react';
import { bool, array, oneOfType, number, string } from 'prop-types';

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
  const handleLoadCarouselEnhanceAccessibility = () => {
    const $lis = document.querySelectorAll('li.dot');
    const $liItems = document.querySelectorAll('li.slide');
    const $aItems = document.querySelectorAll('li.slide > a');

    $lis.forEach($li => $li.removeAttribute('role'));
    $aItems.forEach(($a, index) =>
      $a.setAttribute('aria-label', `${index + 1} of ${$liItems.length}`)
    );
  };

  useEffect(() => {
    window.addEventListener('load', handleLoadCarouselEnhanceAccessibility);

    return () => {
      window.removeEventListener(
        'load',
        handleLoadCarouselEnhanceAccessibility
      );
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
        item: 'slide item',
      }}
      {...restProps}
    >
      {slides.map((slide, index) => {
        return <div key={index}>{slide}</div>;
      })}
    </Carousel>
  );
};

export default CarouselSlider;

CarouselSlider.propTypes = {
  slides: array,
  emulateTouch: bool,
  autoPlay: bool,
  centerMode: bool,
  infiniteLoop: bool,
  showArrows: bool,
  useKeyboardArrows: bool,
  width: oneOfType([number, string]),
  showThumbs: bool,
};
