import { useMemo } from 'react';

import { ReactComponent as Unchecked } from './assets/checked=false.svg';
import { ReactComponent as Checked } from './assets/checked=true.svg';
import { Icon } from 'components';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container, radioButton, label, icon } from './RadioButton.module.scss';

const labelText = {
  female: '여성',
  male: '남성',
  genderBoth: '상관없음',
  level1: '초급자',
  level2: '중급자',
  level3: '고급자',
};

const RadioButton = ({
  id,
  name,
  field,
  className: { label: labelClassName },
}) => {
  const { checked } = field;
  const CheckIcon = useMemo(() => (checked ? Checked : Unchecked), [checked]);

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
        {labelText[id]}
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
