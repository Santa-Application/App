import PropTypes from 'prop-types';
import classNames from 'classnames';
import { textarea } from './Textarea.module.scss';

const Textarea = ({ value, onChange, className, ...restProps }) => {
  const textareaClasses = classNames(className, textarea);

  return (
    <label>
      <textarea
        onChange={onChange}
        className={textareaClasses}
        value={value}
      ></textarea>
    </label>
  );
};

Textarea.defaultProps = {
  value: '',
  onChange: null,
  className: '',
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])])
    .isRequired,
  className: PropTypes.string,
};

export default Textarea;
