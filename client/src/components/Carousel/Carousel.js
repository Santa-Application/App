import {
  carousel,
  slide,
  button,
  navigators,
  contents as contentsClass
} from './Carousel.module.scss';
import {
  useRef
} from 'react';


const Carousel = ({ contentsLabel,contents, contentWidth, contentHeight }) => {

  // 들어오는 컨텐츠 한개의 width를 가져와야하고
  // 총길이를 계산해서 ul의 width값으로 설정하고 하나의 길이는 carousel class의 width로 지정해야 한다.
  const ulRef = useRef();

  const handleClickButton = ({ target }) => {
    ulRef.current.style.setProperty('--currentSlide', target.getAttribute('data-slide'));
  };


  return (
    <section
      className={carousel}
      aria-labelledby={'carouselheading'}
      aria-roledescription={'carousel'}
    >
      <h3 
        id={'carouselheading'}
        className={'a11yHidden'}
      >
        {contentsLabel}
      </h3>
      <ul className={contentsClass} ref={ulRef}>
        {
          contents.map((content, index) => (
            <li
              className={slide}
              key={`content-${index}`}
              aria-roledescription={'slide'}
              aria-label={`${index + 1} of ${contents.length}`}
              id={`${content}-${index}`}
            >
              {content}
            </li>
          ))
        }
      </ul>
      <ul
        className={navigators}
      >
        {
          contents.map((content, index) => (
            <li
              key={index}
            >
              <button
                aria-controls={`${content}-${index}`}
                aria-pressed={"true"}
                data-slide={index}
                className={button}
                onClick={handleClickButton}
              >
                {content.props.mountainName}
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Carousel;

Carousel.defaultProps = {
  contents: []
};
