import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { checkbox } from './Checkbox.module.scss';
import 'styles/common.scss';
import classNames from 'classnames';

const Checkbox = ({
  labelClassName,
  inputClassName,
  icon,
  isChecked,
  ...restProps
}) => {
  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckbox = useCallback(() => {
  //   // dispatch()
  //   setIsChecked(!isChecked);
  // }, [isChecked]);

  const labelClasses = classNames(labelClassName);
  const checkboxClasses = classNames(checkbox, inputClassName);

  return (
    <label className={labelClasses}>
      <input
        type="checkbox"
        className={checkboxClasses}
        name="checkbox"
        // onChange={handleCheckbox}
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
};
Checkbox.propTypes = {
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  icon: PropTypes.bool,
};

export default Checkbox;
