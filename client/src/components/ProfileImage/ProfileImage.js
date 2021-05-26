import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container, large, medium, small } from './ProfileImage.module.scss';

const sizeStyle = {
  large,
  medium,
  small,
};

const ProfileImage = ({ size, src, className }) => {
  const containerClasses = classNames(
    className?.container,
    container,
    sizeStyle[size]
  );

  return (
    <div className={containerClasses}>
      <img src={src} alt="" />
    </div>
  );
};

ProfileImage.defaultProps = {
  size: 'medium',
  src: '',
  className: {},
};

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  className: PropTypes.object,
};

export default ProfileImage;
