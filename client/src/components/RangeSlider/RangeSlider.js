import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import NumberInput from 'components/NumberInput/NumberInput';
import {
  rangeSliderContainer,
  numberInputContainer,
  numberInput,
} from './RangeSlider.module.scss';
import PropTypes, { arrayOf, number, string } from 'prop-types';

const RangeSlider = ({
  currentValue,
  handleChangeSlider,
  handleChangeMinInput,
  handleChangeMaxInput,
  handleSelectInput,
  content,
}) => {
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 30,
      label: '30',
    },
    {
      value: 40,
      label: '40',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 60,
      label: '60',
    },
    {
      value: 100,
      label: '100',
    },
  ];

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
      backgroundColor: '#ffffff',
      height: '0.4rem',
      width: '0.2rem',
    },
    markActive: {
      opacity: 0.5,
      backgroundColor: '#ffffff',
    },
    markLabel: {
      transform: 'translateX(-70%) translateY(-300%)',
      color: '#ced3e3',
    },
  });

  const classes = useStyles();

  // const [currentValue, setCurrentValue] = React.useState([20, 45]);

  const valuetext = value => {
    return `${value}세`;
  };

  // const handleChangeSlider = (_, newValue) => {
  //   setCurrentValue(newValue);
  // };

  // const handleChangeMinInput = e => {
  //   setCurrentValue([+e.target.value, currentValue[1]]);
  // };

  // const handleChangeMaxInput = e => {
  //   setCurrentValue([currentValue[0], +e.target.value]);
  // };

  // const handleSelectInput = e => {
  //   e.target.select();
  // };

  return (
    <div className={rangeSliderContainer}>
      <div className={numberInputContainer}>
        <NumberInput
          className={numberInput}
          value={currentValue[0]}
          min="0"
          max={currentValue[1]}
          onChange={handleChangeMinInput}
          onClick={handleSelectInput}
          content={content}
        />
        <NumberInput
          className={numberInput}
          value={currentValue[1]}
          min={currentValue[0]}
          max="100"
          onChange={handleChangeMaxInput}
          onClick={handleSelectInput}
          content={content}
        />
      </div>
      <Slider
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
        value={currentValue}
        onChange={handleChangeSlider}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </div>
  );
};

RangeSlider.defaultProps = {
  currentValue: [],
  handleChangeSlider: null,
  handleChangeMinInput: null,
  handleChangeMaxInput: null,
  handleSelectInput: null,
  content: '',
};

RangeSlider.propTypes = {
  currentValue: arrayOf(number),
  handleChangeSlider: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
  handleChangeMinInput: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
  handleChangeMaxInput: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
  handleSelectInput: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
  content: string,
};

export default RangeSlider;
