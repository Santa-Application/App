import classNames from 'classnames';
import { string } from 'prop-types';
import React from 'react';
import { numberInput } from './NumberInput.module.scss';

const NumberInput = ({ id, className, name, content }) => {
  const numberInputClasses = classNames(className, numberInput);
  return (
    <>
      <input
        id={id}
        type="number"
        min="1"
        className={numberInputClasses}
        name={name}
      />{' '}
      {content}
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
};

export default NumberInput;
