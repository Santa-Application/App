import { RadioButton } from 'components';
import classNames from 'classnames';
import { Field } from 'formik';
import { container } from './HikingLevelSelectButton.module.scss';

const HikingLevelSelectButton = ({ ...restProps }) => {
  return (
    <div className={container}>
      <Field
        id="level1"
        name="hikingLevel"
        type="radio"
        value="level1"
        component={RadioButton}
      />
      <Field
        id="level2"
        name="hikingLevel"
        type="radio"
        value="level2"
        component={RadioButton}
      />
      <Field
        id="level3"
        name="hikingLevel"
        type="radio"
        value="level3"
        component={RadioButton}
      />
    </div>
  );
};

export default HikingLevelSelectButton;
