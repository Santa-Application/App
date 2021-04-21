import PropTypes from 'prop-types';
import classNames from 'classnames';
import { textarea } from './Textarea.module.scss';

const Textarea = ({ field, ...inputProps }) => {
  const { id, onChange, className } = inputProps;
  const textareaClasses = classNames(className.textarea, textarea);

  return (
    <>
      <label htmlFor={id}></label>
      <textarea
        id={id}
        onChange={onChange}
        className={textareaClasses}
      ></textarea>
    </>
  );
};

Textarea.defaultProps = {
  id: '',
  onChange: null,
  className: {},
};

Textarea.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])])
    .isRequired,
  className: PropTypes.object,
};

export default Textarea;
