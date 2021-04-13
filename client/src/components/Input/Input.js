import React from 'react';
import { bool, string } from 'prop-types';
import { input, a11yHidden } from './Input.module.scss';
import classNames from 'classnames';

const Input = ({ id, type, label, className, labelVisible, ...restProps }) => {
  const inputClasses = classNames(input, className);

  return (
    <div>
      <label htmlFor={id} className={labelVisible ? '' : `${a11yHidden}`}>
        {label}
      </label>
      <input id={id} type={type} className={inputClasses} {...restProps} />
    </div>
  );
};

Input.defaultTypes = {
  id: '',
  labelVisible: false,
  className: '',
};

Input.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  type: string.isRequired,
  labelVisible: bool,
  className: string,
};

export default Input;
