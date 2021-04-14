import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container, large, medium, small } from './ProfileImage.module.scss';

const checkProfileSize = size => {
  switch (size) {
    case 'large':
      return large;
    case 'small':
      return small;
    default:
    case 'medium':
      return medium;
  }
};

const ProfileImage = ({ size, src, className, ...restProps }) => {
  const containerClasses = classNames(
    className,
    container,
    checkProfileSize(size)
  );

  return (
    <div className={containerClasses}>
      <img src={src} alt="" />
    </div>
  );
};

ProfileImage.defaultProps = {
  src: '',
  size: 'medium',
  className: '',
};

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  className: PropTypes.string,
};

export default ProfileImage;
