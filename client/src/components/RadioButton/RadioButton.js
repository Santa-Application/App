import { Icon } from 'components';

import { ReactComponent as Unchecked } from './assets/checked=false.svg';
import { ReactComponent as Checked } from './assets/checked=true.svg';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container, radioButton, label, icon } from './RadioButton.module.scss';
const RadioButton = ({
  id,
  name,
  field,
  className: { label: labelClassName },
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
    default:
      labelText = '상관없음';
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
  }

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
        <CheckIcon className={icon} />
        {labelText}
        <Icon shape={id} />
      </label>
    </div>
  );
};
RadioButton.defaultProps = {
  id: '',
  name: '',
  field: {},
  className: {},
};
RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  className: PropTypes.object,
};

export default RadioButton;
