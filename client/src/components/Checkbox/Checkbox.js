import PropTypes from 'prop-types';
import { checkbox } from './Checkbox.module.scss';
import 'styles/common.scss';
import classNames from 'classnames';

const Checkbox = ({
  labelClassName,
  inputClassName,
  icon,
  isChecked,
  onChange,
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
      {icon}
      {/* {icon && <Icon />} */}
    </label>
  );
};

Checkbox.defaultProps = {
  labelClassName: '',
  inputClassName: '',
  icon: false,
  isChecked: false,
  onChange: null,
};
Checkbox.propTypes = {
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  icon: PropTypes.bool,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
};

export default Checkbox;
