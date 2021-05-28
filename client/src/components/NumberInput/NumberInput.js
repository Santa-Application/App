import React from 'react';
import classNames from 'classnames';
import { string, shape } from 'prop-types';
import { numberInput } from './NumberInput.module.scss';

const NumberInput = ({ field, inputProps }) => {
  const { id, name, className, unit } = inputProps;
  const numberInputClasses = classNames(className, numberInput);

  return (
    <div className={numberInputClasses}>
      <input
        id={id}
        name={name}
        type="number"
        min="1"
        {...(name === 'recruitingAge' || { ...field })}
      />
      <span>{unit}</span>
    </div>
  );
};

NumberInput.defaultProps = {
  inputProps: {
    id: '',
    name: '',
    unit: '',
  },
};

NumberInput.propTypes = {
  inputProps: shape({
    /** 식별 가능한 id값을 필수로 전달합니다. */
    id: string.isRequired,
    /** 폼 컨트롤 시, 사용자가 입력한 값과 매칭되는 네임 값을 설정합니다. */
    name: '',
    /** input 옆에 표시되는 단위를 전달받습니다. */
    unit: string,
    /** 추가적으로 필요한 class name을 전달받습니다. */
    className: string,
  }),
};

export default NumberInput;
