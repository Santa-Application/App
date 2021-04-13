import PropTypes from 'prop-types';
import { checkbox } from './Checkbox.module.scss';
import 'styles/common.scss';
import classNames from 'classnames';

const Checkbox = ({
  isChecked,
  onChange,
  children,
  labelClassName,
  inputClassName,
  ...restProps
}) => {
  const labelClasses = classNames(labelClassName);
  const checkboxClasses = classNames(checkbox, inputClassName);

  return (
    <label className={labelClasses}>
      <input
        type="checkbox"
        className={checkboxClasses}
        name="checkbox"
        onChange={onChange}
        checked={isChecked}
      />
      {children}
    </label>
  );
};

Checkbox.defaultProps = {
  isChecked: false,
  onChange: null,
  children: null,
};
Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  children: PropTypes.node,
};

export default Checkbox;
