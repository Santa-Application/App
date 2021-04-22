import React from 'react';
import { string } from 'prop-types';
import { input } from './Input.module.scss';
import classNames from 'classnames';

const Input = ({ field, ...inputProps }) => {
  const { type, id, className } = inputProps;

  const inputClasses = classNames(input, className);

  return <input type={type} id={id} className={inputClasses} {...field} />;
};

Input.defaultTypes = {
  type: 'text',
  id: '',
  className: '',
};

Input.propTypes = {
  type: string.isRequired,
  id: string.isRequired,
  className: string,
};

export default Input;
