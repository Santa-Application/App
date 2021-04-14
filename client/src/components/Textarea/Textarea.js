import PropTypes from 'prop-types';
import classNames from 'classnames';
import { textarea } from './Textarea.module.scss';

const Textarea = ({ value, onChange, className, ...restProps }) => {
  const textareaClasses = classNames(className, textarea);

  return (
    <label>
      <textarea onChange={onChange} className={textareaClasses}>
        {value}
      </textarea>
    </label>
  );
};

Textarea.defaultProps = {
  value: '',
  onChange: null,
};

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
};

export default Textarea;
