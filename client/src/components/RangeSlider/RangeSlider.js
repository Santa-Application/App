import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { rangeSliderContainer } from './RangeSlider.module.scss';
import PropTypes, { arrayOf, number, string } from 'prop-types';

const RangeSlider = ({ field, inputProps }) => {
  const useStyles = makeStyles({
    root: {
      color: '#fc7145',
      padding: '0.5rem',
      width: '100%',
    },
    thumb: {
      height: '1.4rem',
      width: '1.4rem',
      boxShadow: '0.1rem 0.2rem 1rem rgba(206, 211, 227, 0.4)',
      '&:focus, &:hover, &$active': {
        boxShadow: '0 0 1rem 0.1rem #fc7145',
      },
    },
    valueLabel: {
      left: 'calc(-50%)',
      top: '2rem',
      '& *': {
        background: 'transparent',
        color: ' #727681',
        fontSize: '1.2rem',
      },
    },
    track: {
      height: '0.4rem',
    },
    rail: {
      color: 'rgba(206, 211, 227, 0.6)',
      opacity: 1,
      height: '0.4rem',
    },
    mark: {
      backgroundColor: 'transparent',
      height: '0.4rem',
      width: '0.2rem',
    },
    markActive: {
      opacity: 0.5,
      backgroundColor: 'transparent',
    },
    markLabel: {
      transform: 'translateX(-70%) translateY(-300%)',
      color: '#ced3e3',
    },
  });

  const classes = useStyles();

  const valuetext = value => {
    return `${value}세`;
  };

  const {
    id,
    name,
    setFieldValue,
    currentAge,
    setCurrentAge,
    onChangeSlider,
  } = inputProps;

  return (
    <div className={rangeSliderContainer}>
      <Slider
        id={id}
        classes={{
          root: classes.root,
          thumb: classes.thumb,
          valueLabel: classes.valueLabel,
          track: classes.track,
          rail: classes.rail,
          mark: classes.mark,
          markActive: classes.markActive,
          markLabel: classes.markLabel,
        }}
        value={currentAge}
        onChange={(e, newValue) =>
          onChangeSlider(e, newValue, name, setCurrentAge, setFieldValue)
        }
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
};

RangeSlider.defaultProps = {
  inputProps: {
    id: '',
    name: '',
    setFieldValue: null,
    currentAge: [],
    setCurrentAge: null,
    onChangeSlider: null,
  },
};

RangeSlider.propTypes = {
  inputProps: PropTypes.shape({
    id: string,
    name: string,
    setFieldValue: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.oneOf([null]),
    ]),
    currentAge: arrayOf(number),
    setCurrentAge: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.oneOf([null]),
    ]),
    onChangeSlider: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.oneOf([null]),
    ]),
  }),
};

export default RangeSlider;
