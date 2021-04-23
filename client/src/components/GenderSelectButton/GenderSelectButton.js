import { RadioButton } from 'components';
import classNames from 'classnames';
import { Field } from 'formik';
import { container } from './GenderSelectButton.module.scss';

const GenderSelectButton = ({ inputProps }) => {
  const { name } = inputProps;

  return (
    <div className={container}>
      <Field
        id="female"
        name={name}
        type="radio"
        value="female"
        component={RadioButton}
      />
      <Field
        id="male"
        name={name}
        type="radio"
        value="male"
        component={RadioButton}
      />
      <Field
        id="genderBoth"
        name={name}
        type="radio"
        value="genderBoth"
        component={RadioButton}
      />
    </div>
  );
};

export default GenderSelectButton;
