import { ProfileImage } from 'components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  container,
  title,
  recruiteesContainer,
  recruitees,
} from './StatusOfApplicationBox.module.scss';

const StatusOfApplicationBox = ({ images, className, ...restProps }) => {
  const titleClasses = classNames(className.title, title);

  return (
    <div className={container}>
      <p className={titleClasses}>신청 현황</p>
      <div className={recruiteesContainer}>
        {images.map((image, index) => (
          <ProfileImage
            key={index}
            src={image}
            size="small"
            className={recruitees}
          />
        ))}
      </div>
    </div>
  );
};

StatusOfApplicationBox.defaultProps = {
  images: [],
  className: '',
};

StatusOfApplicationBox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default StatusOfApplicationBox;
