import classNames from 'classnames';
import { ProfileImage } from 'components';
import PropTypes from 'prop-types';
import {
  container,
  title,
  applicantContainer,
  applicant,
} from './StatusOfApplicationBox.module.scss';

const StatusOfApplicationBox = ({ images, className, ...restProps }) => {
  const titleClasses = classNames(className.title, title);

  return (
    <div className={container}>
      <p className={titleClasses}>신청 현황</p>
      <div className={applicantContainer}>
        {images.map(image => (
          <ProfileImage src={image} size="small" className={applicant} />
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
