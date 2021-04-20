import React from 'react';
import { bool, string } from 'prop-types';
import { input, a11yHidden } from './Input.module.scss';
import classNames from 'classnames';
import { useField } from 'formik';

const Input = ({ field, ...inputProps }) => {
  const { type, id, name, value, className } = inputProps;

  const inputClasses = classNames(input, className);

  return <input type={type} id={id} className={inputClasses} {...field} />;
};

Input.defaultTypes = {
  type: 'text',
  id: '',
  name: '',
  value: '',
  labelVisible: false,
  className: '',
};

Input.propTypes = {
  type: string.isRequired,
  id: string.isRequired,
  label: string.isRequired,
  labelVisible: bool,
  className: string,
};

export default Input;
