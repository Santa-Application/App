import React from 'react';
import PropTypes, { string } from 'prop-types';
import { input } from './Input.module.scss';
import classNames from 'classnames';

const Input = ({ field, inputProps }) => {
  const { type, id, className } = inputProps;

  const inputClasses = classNames(input, className);

  return (
    <input
      id={id}
      type={type}
      className={inputClasses}
      autoComplete="off"
      {...field}
    />
  );
};

Input.defaultTypes = {
  inputProps: {
    type: 'text',
    id: '',
  },
};

Input.propTypes = {
  inputProps: PropTypes.shape({
    /** input의 type 속성을 지정합니다. text, eamil, password 중 하나를 전달받습니다. */
    type: PropTypes.oneOf(['text', 'email', 'password']),
    /** 식별 가능한 id값은 필수입니다. */
    id: string.isRequired,
    /** 추가적으로 필요한 class name을 전달받습니다. */
    className: string,
  }),
};

export default Input;
