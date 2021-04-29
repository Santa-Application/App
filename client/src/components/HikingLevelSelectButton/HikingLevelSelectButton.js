import { Field } from 'formik';

import { RadioButton } from 'components';

import PropTypes from 'prop-types';
import { container } from './HikingLevelSelectButton.module.scss';

const HikingLevelSelectButton = ({ inputProps }) => {
  const { name } = inputProps;

  return (
    <div className={container}>
      <Field
        id="level1"
        name={name}
        type="radio"
        value="level1"
        component={RadioButton}
      />
      <Field
        id="level2"
        name={name}
        type="radio"
        value="level2"
        component={RadioButton}
      />
      <Field
        id="level3"
        name={name}
        type="radio"
        value="level3"
        component={RadioButton}
      />
    </div>
  );
};

HikingLevelSelectButton.defaultProps = {
  inputProps: {
    formType: 'hikingLevel',
    name: 'hikingLevel',
  },
};

HikingLevelSelectButton.propTypes = {
  inputProps: PropTypes.shape({
    formType: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default HikingLevelSelectButton;
