import { useLocation } from 'react-router-dom';
import { Field } from 'formik';

import { RadioButton } from 'components';

import { PropTypes } from 'prop-types';
import { container } from './GenderSelectButton.module.scss';

const GenderSelectButton = ({ inputProps }) => {
  const { name } = inputProps;
  const location = useLocation();

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
      {location.pathname !== '/signup' && (
        <Field
          id="genderBoth"
          name={name}
          type="radio"
          value="genderBoth"
          component={RadioButton}
        />
      )}
    </div>
  );
};

GenderSelectButton.defaultProps = {
  inputProps: {
    formType: 'gender',
    name: '',
  },
};

GenderSelectButton.propTypes = {
  inputProps: PropTypes.shape({
    formType: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default GenderSelectButton;
