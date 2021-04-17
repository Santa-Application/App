import PropTypes from 'prop-types';
import classNames from 'classnames';
import { textarea } from './Textarea.module.scss';

const Textarea = ({ id, value, onChange, className, ...restProps }) => {
  const textareaClasses = classNames(className.textarea, textarea);

  return (
    <>
      <label htmlFor={id}></label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className={textareaClasses}
      ></textarea>
    </>
  );
};

Textarea.defaultProps = {
  id: '',
  value: '',
  onChange: null,
  className: {},
};

Textarea.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])])
    .isRequired,
  className: PropTypes.object,
};

export default Textarea;
