import Icon from 'components/Icon/Icon';
import { ReactComponent as Unchecked } from './assets/checked=false.svg';
import { ReactComponent as Checked } from './assets/checked=true.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container, input, label, icon } from './RadioButton.module.scss';

const RadioButton = ({
  id,
  name,
  type,
  iconSize,
  checked,
  onChange,
  children,
  className: { label: labelClassName },
  ...restProps
}) => {
  let text = '';
  switch (type) {
    case 'female':
      text = '여성';
      break;
    case 'male':
      text = '남성';
      break;
    case 'genderBoth':
    default:
      text = '상관없음';
  }

  const iconSizeWithUnit = `${iconSize}rem`;
  const CheckIcon = checked ? Checked : Unchecked;

  const labelClasses = classNames(labelClassName, label);

  return (
    <div className={container}>
      <input
        id={id}
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className={input}
      />
      <label htmlFor={id} className={labelClasses}>
        <CheckIcon
          className={icon}
          width={iconSizeWithUnit}
          height={iconSizeWithUnit}
        />
        {text}
        <Icon shape={type} />
      </label>
    </div>
  );
};

RadioButton.defaultProps = {
  id: '',
  name: '',
  type: 'genderBoth',
  iconSize: 1.4,
  checked: false,
  onChange: null,
  className: '',
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['female', 'male', 'genderBoth']).isRequired,
  iconSize: PropTypes.number,
  checked: PropTypes.bool,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  className: PropTypes.string,
};

export default RadioButton;
