import classNames from 'classnames';
import { string } from 'prop-types';
import React from 'react';
import { numberInput } from './NumberInput.module.scss';

const NumberInput = ({ id, className, name, unit, value, ...restProps }) => {
  const numberInputClasses = classNames(className, numberInput);
  return (
    <>
      <input
        id={id}
        type="number"
        min="1"
        className={numberInputClasses}
        name={name}
        value={value}
        {...restProps}
      />{' '}
      <span>{unit}</span>
    </>
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
