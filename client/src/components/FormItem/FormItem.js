import React from 'react';
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

const FormItem = ({ headingProps, descProps, inputProps, ...restProps }) => {
  const FormInput = () => {
    let Comp = '';
    switch (inputProps.formType) {
      case 'file':
        Comp = <FileInput {...inputProps} />;
        break;
      case 'number':
        Comp = <NumberInput {...inputProps} />;
        break;
      case 'radio':
        Comp = <RadioButton {...inputProps} />;
        break;
      case 'rangeSlider':
        Comp = <RangeSlider {...inputProps} />;
        break;
      case 'select':
        Comp = <SelectBox {...inputProps} />;
        break;
      case 'date':
        Comp = <SelectDate {...inputProps} />;
        break;
      case 'textarea':
        Comp = <Textarea {...inputProps} />;
        break;
      case 'text':
        Comp = <Input {...inputProps} />;
        break;

      default:
        throw new Error('해당하는 input 타입이 존재하지 않습니다.');
    }
    return Comp;
  };

  return (
    <div className={formItem} {...restProps}>
      <Heading level={headingProps.level} content={headingProps.content} />
      <p>{descProps.content}</p>
      <FormInput />
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
  inputProps: object.isRequired,
};
