import PropTypes from 'prop-types';
import classNames from 'classnames';
import { textarea } from './Textarea.module.scss';

const Textarea = ({ field, inputProps }) => {
  const { name } = inputProps;

  const textareaClasses = classNames(textarea);

  return (
    <>
      <textarea name={name} className={textareaClasses} {...field}></textarea>
    </>
  );
};

Textarea.defaultProps = {
  field: {},
  inputProps: {},
};

Textarea.propTypes = {
  field: PropTypes.object.isRequired,
  inputProps: PropTypes.object,
};

export default Textarea;
