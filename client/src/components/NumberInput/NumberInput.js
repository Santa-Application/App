/* eslint-disable indent */
import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';
import { numberInput } from './NumberInput.module.scss';

const NumberInput = ({ field, inputProps }) => {
  const {
    id,
    name,
    className,
    unit,
    handleChange,
    onChangeMinInput,
    onChangeMaxInput,
    minInputName,
    maxInputName,
    setFieldValue,
    currentAge,
    setCurrentAge,
  } = inputProps;
  const numberInputClasses = classNames(className, numberInput);

  // const handleChangeInput = e => {
  //   if (name === maxInputName) {
  //     onChangeMaxInput(
  //       e,
  //       maxInputName,
  //       setFieldValue,
  //       currentAge,
  //       setCurrentAge
  //     );
  //     return;
  //   }
  //   if (name === minInputName) {
  //     onChangeMinInput(
  //       e,
  //       minInputName,
  //       setFieldValue,
  //       currentAge,
  //       setCurrentAge
  //     );
  //     return;
  //   }
  //   handleChange(e);
  // };

  return (
    <div className={numberInputClasses}>
      <input
        id={id}
        name={name}
        type="number"
        min="1"
        {...(name === 'recruitingAge' || { ...field })}
        // onChange={handleChangeInput}
      />
      <span>{unit}</span>
    </div>
  );
};

NumberInput.defaultProps = {
  id: '',
  unit: '',
  className: '',
};

NumberInput.propTypes = {
  id: string.isRequired,
  unit: string,
  className: string,
};

export default NumberInput;
