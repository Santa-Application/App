import { Icon } from 'components';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container, checkbox, label } from './Checkbox.module.scss';

const Checkbox = ({
  id,
  name,
  value,
  checked,
  onChange,
  checkboxIcon,
  children,
  className,
  ...restProps
}) => {
  const labelClasses = classNames(className.label, label);
  const checkboxClasses = classNames(className.checkbox, checkbox);

  return (
    <div className={container}>
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        className={checkboxClasses}
        onChange={onChange}
      />
      <label htmlFor={id} className={labelClasses}>
        {checkboxIcon && <Icon shape={checkboxIcon} />}
        {children}
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  id: '',
  name: '',
  value: '',
  checked: false,
  onChange: null,
  checkboxIcon: '',
  children: '',
  className: {},
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])])
    .isRequired,
  checkboxIcon: PropTypes.oneOf(['likeTrue', 'likeFalse']),
  children: PropTypes.string,
  className: PropTypes.object,
};

export default Checkbox;
