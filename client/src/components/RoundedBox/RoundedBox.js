import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container } from './RoundedBox.module.scss';

const RoundedTextBox = ({ children, className, ...restProps }) => {
  const containerClasses = classNames(className, container);
  return <span className={containerClasses}>{children}</span>;
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
