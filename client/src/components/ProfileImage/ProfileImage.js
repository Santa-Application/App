import classNames from 'classnames';
import PropTypes from 'prop-types';
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

const ProfileImage = ({ size, src, containerClassName, ...restProps }) => {
  const containerClasses = classNames(
    containerClassName,
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
};
ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};

export default ProfileImage;
