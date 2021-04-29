import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container } from './RoundedBox.module.scss';

const RoundedTextBox = ({ children, className }) => {
  const containerClasses = classNames(className, container);
  return <div className={containerClasses}>{children}</div>;
};

RoundedTextBox.defaultProps = {
  children: null,
  className: '',
};

RoundedTextBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default RoundedTextBox;
