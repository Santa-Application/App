import classNames from 'classnames';
import { string, bool, func, node } from 'prop-types';
import {
  button,
  primary,
  secondary as secondaryClass,
} from './Button.module.scss';

const Button = ({
  secondary,
  type,
  disabled,
  value,
  className,
  onClick,
  children,
  ...restProps
}) => {
  const composeClasses = classNames(
    button,
    secondary ? secondaryClass : primary
  );

  return (
    <button
      className={classNames(composeClasses, className)}
      type={type}
      disabled={disabled}
      value={value}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  secondary: false,
  type: 'submit',
  disabled: false,
  value: 'Default submit button',
  children: 'Button',
  className: '',
  onClick: () => {},
};

Button.propTypes = {
  secondary: bool,
  type: string,
  disabled: bool,
  value: string,
  children: node,
  className: string,
  onClick: func,
};
