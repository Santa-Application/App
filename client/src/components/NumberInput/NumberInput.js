import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';
import { numberInput } from './NumberInput.module.scss';

const NumberInput = ({ field, inputProps }) => {
  const { id, className, unit } = inputProps;
  const numberInputClasses = classNames(className, numberInput);
  return (
    <>
      <input
        id={id}
        type="number"
        min="1"
        className={numberInputClasses}
        {...field}
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
