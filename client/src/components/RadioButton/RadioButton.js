import PropTypes from 'prop-types';

const RadioButton = ({
  isChecked,
  onChange,
  children,
  className,
  ...restProps
}) => {
  return (
    <label>
      <input
        type="radio"
        name="radioButton"
        checked={isChecked}
        onChange={onChange}
        className={className}
      />
      {children}
    </label>
  );
};

RadioButton.defaultProps = {
  isChecked: false,
  onChange: null,
  children: null,
};
RadioButton.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  children: PropTypes.node,
};

export default RadioButton;
