import Icon from 'components/Icon/Icon';
import { ReactComponent as Unchecked } from './assets/checked=false.svg';
import { ReactComponent as Checked } from './assets/checked=true.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container, radioButton, label, icon } from './RadioButton.module.scss';

const RadioButton = ({
  id,
  name,
  iconSize,
  field,
  className: { label: labelClassName },
  ...restProps
}) => {
  let labelText = '';
  switch (id) {
    case 'female':
      labelText = '여성';
      break;
    case 'male':
      labelText = '남성';
      break;
    case 'genderBoth':
      labelText = '상관없음';
      break;
    case 'level1':
      labelText = '초급자';
      break;
    case 'level2':
      labelText = '중급자';
      break;
    case 'level3':
    default:
      labelText = '고급자';
  }

  const iconSizeWithUnit = `${iconSize}rem`;
  const checked = field.checked;
  const CheckIcon = checked ? Checked : Unchecked;

  const labelClasses = classNames(labelClassName, label);

  return (
    <div className={container}>
      <input
        id={id}
        name={name}
        type="radio"
        className={radioButton}
        {...field}
      />
      <label htmlFor={id} className={labelClasses}>
        <CheckIcon
          className={icon}
          width={iconSizeWithUnit}
          height={iconSizeWithUnit}
        />
        {labelText}
        <Icon shape={id} />
      </label>
    </div>
  );
};

RadioButton.defaultProps = {
  id: '',
  name: '',
  iconSize: 1.4,
  field: {},
  className: {},
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  iconSize: PropTypes.number,
  className: PropTypes.object,
};

export default RadioButton;
