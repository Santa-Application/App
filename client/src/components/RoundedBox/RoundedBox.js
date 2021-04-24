import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container } from './RoundedBox.module.scss';

const RoundedTextBox = ({ children, className, ...restProps }) => {
  const containerClasses = classNames(className, container);
  return <div className={containerClasses}>{children}</div>;
};

// RoundedTextBox.defaultProps = {
//   content: '',
//   className: '',
// };

// RoundedTextBox.propTypes = {
//   content: PropTypes.string,
//   className: PropTypes.string,
// };

export default RoundedTextBox;
