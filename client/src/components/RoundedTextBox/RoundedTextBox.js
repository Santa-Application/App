import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container } from './RoundedTextBox.module.scss';

const RoundedTextBox = ({ content, className, ...restProps }) => {
  const containerClasses = classNames(className, container);
  return <span className={containerClasses}>{content}</span>;
};

RoundedTextBox.defaultProps = {
  content: '',
  className: '',
};

RoundedTextBox.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

export default RoundedTextBox;
