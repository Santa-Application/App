import Icon from 'components/Icon/Icon';
import { ReactComponent as Unchecked } from './assets/checked=false.svg';
import { ReactComponent as Checked } from './assets/checked=true.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container, radioButton, label, icon } from './RadioButton.module.scss';

const RadioButton = ({
  id,
  name,
  value,
  type,
  checkboxSize,
  iconSize,
  checked,
  onChange,
  children,
  className: { label: labelClassName },
  ...restProps
}) => {
  let labelText = '';
  switch (type) {
    case 'female':
      labelText = '여성';
      break;
    case 'male':
      labelText = '남성';
      break;
    case 'level1':
      labelText = '초급자';
      break;
    case 'level2':
      labelText = '중급자';
      break;
    case 'level3':
      labelText = '고급자';
      break;
    case 'genderBoth':
    default:
      labelText = '상관없음';
  }

  const iconSizeWithUnit = `${iconSize}rem`;

  const checkboxSizeWithUnit = `${checkboxSize}rem`;
  const CheckIcon = checked ? Checked : Unchecked;

  const labelClasses = classNames(labelClassName, label);

  return (
    <div className={container}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={radioButton}
      />
      <label htmlFor={id} className={labelClasses}>
        <CheckIcon
          className={icon}
          width={checkboxSizeWithUnit}
          height={checkboxSizeWithUnit}
        />
        {labelText}
        <Icon shape={type} style={{ width: iconSizeWithUnit, height: iconSizeWithUnit }}/>
      </label>
    </div>
  );
};

RadioButton.defaultProps = {
  id: '',
  name: '',
  value: '',
  type: 'genderBoth',
  checkboxSize: 1.4,
  iconSize: 1,
  checked: false,
  onChange: null,
  className: {},
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['female', 'male', 'genderBoth', 'level1', 'level2', 'level3']).isRequired,
  checkboxSize: PropTypes.number,
  iconSize: PropTypes.number,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])])
    .isRequired,
  className: PropTypes.object,
};

export default RadioButton;