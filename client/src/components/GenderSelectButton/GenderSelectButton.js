import { RadioButton } from 'components';
import classNames from 'classnames';
import { Field } from 'formik';
import { container } from './GenderSelectButton.module.scss';

const GenderSelectButton = ({ ...restProps }) => {
  return (
    <div className={container}>
      <Field
        id="female"
        name="gender"
        type="radio"
        value="female"
        component={RadioButton}
      />
      <Field
        id="male"
        name="gender"
        type="radio"
        value="male"
        component={RadioButton}
      />
      <Field
        id="genderBoth"
        name="gender"
        type="radio"
        value="genderBoth"
        component={RadioButton}
      />
    </div>
  );
};

export default GenderSelectButton;
