import { ProfileImage } from 'components';
import PropTypes from 'prop-types';
import { container, name } from './PublisherInformation.module.scss';

const PublisherInformation = ({ publisherData, className, ...restProps }) => {
  const { publisherImageUrl, publisherName } = publisherData;

  return (
    <div className={container}>
      <ProfileImage src={publisherImageUrl} size="medium" />
      <span className={name}>{publisherName}</span>
    </div>
  );
};

PublisherInformation.defaultProps = {
  publisherData: {
    publisherName: '',
    publisherImageUrl: '',
  },
  className: {},
};

PublisherInformation.propTypes = {
  publisherData: PropTypes.exact({
    publisherName: PropTypes.string,
    publisherImageUrl: PropTypes.string,
  }).isRequired,
  className: PropTypes.object,
};

export default PublisherInformation;
