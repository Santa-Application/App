import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import NumberInput from 'components/NumberInput/NumberInput';
import {
  rangeSliderContainer,
  numberInputContainer,
  numberInput,
} from './RangeSlider.module.scss';
import PropTypes, { arrayOf, number, string } from 'prop-types';
import { Field } from 'formik';

const RangeSlider = ({ field, inputProps }) => {
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
    formType,
    id,
    name,
    minInputName,
    maxInputName,
    unit,
    setFieldValue,
    currentAge,
    setCurrentAge,
    onChangeMinInput,
    onChangeMaxInput,
    onChangeSlider,
    onFocus,
  } = inputProps;

  // console.log(currentAge);

  return (
    <div className={rangeSliderContainer}>
      {/* <div className={numberInputContainer}>
        <NumberInput
          component={NumberInput}
          id={minInputName}
          // name={minInputName}
          className={numberInput}
          min="0"
          max={currentAge[1]}
          onChange={e =>
            onChangeMinInput(
              e,
              minInputName,
              setFieldValue,
              currentAge,
              setCurrentAge
            )
          }
          onFocus={onFocus}
          content={`${unit} ~`}
          inputProps={inputProps}
          // {...field}
        />

        <NumberInput
          // component={NumberInput}
          id={maxInputName}
          // name={maxInputName}
          className={numberInput}
          min={currentAge[0]}
          max="100"
          onChange={e =>
            onChangeMinInput(
              e,
              minInputName,
              setFieldValue,
              currentAge,
              setCurrentAge
            )
          }
          onFocus={onFocus}
          content={unit}
          inputProps={inputProps}
          // {...field}
        />
      </div> */}
      <Slider
        // id={id}
        // name={name}
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
        // marks={marks}
        // {...field}
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
  unit: '',
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
  unit: string,
};

export default RangeSlider;
/* ------------------
  전달될 상태와 핸들러.
  상위 컴포넌트에서 작성해주세요.
  
  const [currentValue, setCurrentValue] = React.useState([20, 45]);
  
  const handleChangeSlider = (_, newValue) => {
    setCurrentValue(newValue);
  };

  const handleChangeMinInput = e => {
    setCurrentValue([+e.target.value, currentValue[1]]);
  };
  
  const handleChangeMaxInput = e => {
    setCurrentValue([currentValue[0], +e.target.value]);
  };
  
  const handleSelectInput = e => {
    e.target.select();
  };
  ----------------------------- */
