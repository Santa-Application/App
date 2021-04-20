import classNames from 'classnames';
import { string, number } from 'prop-types';
import React from 'react';
import { numberInput } from './NumberInput.module.scss';

const NumberInput = ({ id, className, name, content, value, ...restProps }) => {
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
      <span>{content}</span>
    </>
  );
};

NumberInput.defaultProps = {
  id: '',
  className: '',
  name: '',
  content: '',
};

NumberInput.propTypes = {
  id: string.isRequired,
  className: string,
  name: string,
  content: string,
  value: number,
};

export default NumberInput;
