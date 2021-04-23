import React from 'react';
import { ErrorMessage, Field } from 'formik';
import Heading from 'components/Heading/Heading';
import Input from 'components/Input/Input';
import FileInput from 'components/FileInput/FileInput';
import NumberInput from 'components/NumberInput/NumberInput';
import RangeSlider from 'components/RangeSlider/RangeSlider';
import SelectBox from 'components/SelectBox/SelectBox';
import SelectDate from 'components/SelectDate/SelectDate';
import Textarea from 'components/Textarea/Textarea';

import { formItem, errorMessage } from './FormItem.module.scss';
import { object } from 'prop-types';
import classNames from 'classnames';
import GenderSelectButton from 'components/GenderSelectButton/GenderSelectButton';
import { HikingLevelSelectButton } from 'components';

const renderFormInput = formType => {
  let Comp = '';

  switch (formType) {
    case 'date':
      Comp = SelectDate;
      break;
    case 'file':
      Comp = FileInput;
      break;
    case 'number':
      Comp = NumberInput;
      break;
    case 'rangeSlider':
      Comp = RangeSlider;
      break;
    case 'select':
      Comp = SelectBox;
      break;
    case 'textarea':
      Comp = Textarea;
      break;
    case 'text':
      Comp = Input;
      break;
    default:
      throw new Error('해당하는 input 타입이 존재하지 않습니다.');
  }

  return Comp;

  // 디버깅 목적
  // FormInput.displayName = 'FormInput';
};

const FormItem = ({
  headingProps,
  descProps,
  inputProps,
  className,
  ...restProps
}) => {
  // console.log(inputProps);

  const containerClasses = classNames(formItem, className);
  const { name, formType } = inputProps;
  return (
    <div className={containerClasses} {...restProps}>
      <Heading
        level={headingProps.level}
        content={headingProps.content}
        aria-labelledby={inputProps.id}
      />
      <p aria-describedby={inputProps.id}>{descProps.content}</p>
      {formType === 'gender' ? (
        <GenderSelectButton inputProps={inputProps} />
      ) : formType === 'hikingLevel' ? (
        <HikingLevelSelectButton inputProps={inputProps} />
      ) : (
        <Field
          component={renderFormInput(formType)}
          inputProps={inputProps}
          name={name}
        />
      )}
      <ErrorMessage
        className={errorMessage}
        component="div"
        name={inputProps.name}
      />
    </div>
  );
};

export default FormItem;

// FormItem.defaultProps = {
//   descProps: {
//     content: '',
//   },
// };

// FormItem.propTypes = {
//   headingProps: object.isRequired,
//   descProps: object.isRequired,
//   inputProps: object.isRequired,
// };
