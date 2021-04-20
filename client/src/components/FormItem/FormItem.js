import React from 'react';
import { Field, ErrorMessage, Form } from 'formik';
import Heading from 'components/Heading/Heading';
import Input from 'components/Input/Input';
import FileInput from 'components/FileInput/FileInput';
import NumberInput from 'components/NumberInput/NumberInput';
import RadioButton from 'components/RadioButton/RadioButton';
import RangeSlider from 'components/RangeSlider/RangeSlider';
import SelectBox from 'components/SelectBox/SelectBox';
import SelectDate from 'components/SelectDate/SelectDate';
import Textarea from 'components/Textarea/Textarea';

import { formItem } from './FormItem.module.scss';
import { object } from 'prop-types';

/* --------------------------


상위 컴포넌트에서 사용할 때의 예시

const App = () => {
  return (<FormItem
    headingProps={{
      level: 3,
      content: '등산 메이트 나이대',
    }}
    descProps={{
      content: '같이 등산할 메이트의 나이대를 정해주세요',
    }}
    inputProps={{
      formType: 'rangeSlider',
      name: 'rangeSlider',
      currentValue: currentValue,
      onChange: {
        slider: handleChangeSlider,
        minInput: handleChangeMinInput,
        maxInput: handleChangeMaxInput,
      },
      onClick: handleSelectInput,
      content: valueUnit,
    }}
  />)
}

-------------------------- */

const renderFormInput = formType => {
  const FormInput = props => {
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
      case 'radio':
        Comp = RadioButton;
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

    return <Comp {...props} />;
  };

  // 디버깅 목적
  FormInput.displayName = 'FormInput';

  return FormInput;
};

const FormItem = ({ headingProps, descProps, inputProps, ...restProps }) => {
  return (
    <div className={formItem} {...restProps}>
      <Heading
        level={headingProps.level}
        content={headingProps.content}
        aria-labelledby={inputProps.id}
      />
      <p aria-describedby={inputProps.id}>{descProps.content}</p>
      <Field component={renderFormInput(inputProps.formType)} {...inputProps} />
      {/* <ErrorMessage /> */}
    </div>
  );
};

export default FormItem;

FormItem.defaultProps = {
  descProps: {
    content: '',
  },
};

FormItem.propTypes = {
  headingProps: object.isRequired,
  descProps: object.isRequired,
  // inputProps: object.isRequired,
};
