import classNames from 'classnames';
import PropTypes from 'prop-types';
import { container, image } from './ProfileImage.module.scss';

const ProfileImage = ({ src, containerClassName, ...restProps }) => {
  const containerClasses = classNames(containerClassName, container);
  return (
    <div className={containerClasses}>
      <img src={src} alt="" className={image} />
    </div>
  );
};

ProfileImage.defaultProps = {
  src: '',
};
ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ProfileImage;
