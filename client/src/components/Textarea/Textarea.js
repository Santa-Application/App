import PropTypes from 'prop-types';
import { textarea } from './Textarea.module.scss';
import classNames from 'classnames';

const Textarea = ({ value, className, ...restProps }) => {
  const textareaClasses = classNames(className, textarea);

  return (
    <label>
      <textarea className={textareaClasses}>{value}</textarea>
    </label>
  );
};

Textarea.defaultProps = {
  value: '',
};
Textarea.propTypes = {
  value: PropTypes.string,
};

export default Textarea;
