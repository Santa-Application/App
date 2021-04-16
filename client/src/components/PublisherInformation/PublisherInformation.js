import { ProfileImage } from 'components';
import PropTypes from 'prop-types';
import { container, name } from './PublisherInformation.module.scss';

const PublisherInformation = ({ publisherData, className, ...restProps }) => {
  const { imageUrl, name: publisherName } = publisherData;

  return (
    <div className={container}>
      <ProfileImage src={imageUrl} size="medium" />
      <span className={name}>{publisherName}</span>
    </div>
  );
};

PublisherInformation.defaultProps = {
  publisherData: {
    name: '',
    imageUrl: '',
  },
  className: '',
};

PublisherInformation.propTypes = {
  publisherData: PropTypes.exact({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

export default PublisherInformation;
