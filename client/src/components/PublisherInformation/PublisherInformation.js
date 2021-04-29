import { Link } from 'react-router-dom';

import { ProfileImage } from 'components';

import PropTypes from 'prop-types';
import { container, name } from './PublisherInformation.module.scss';

const PublisherInformation = ({ publisherData }) => {
  if (!publisherData) return null;

  const { imageURL, publisherName } = publisherData;
  return (
    <div className={container}>
      <ProfileImage src={imageURL} size="medium" />
      <Link to={`/profile/${publisherName}`} className={name}>
        {publisherName}
      </Link>
    </div>
  );
};

PublisherInformation.defaultProps = {
  publisherData: {
    publisherName: '',
    imageURL: '',
  },
  className: {},
};

PublisherInformation.propTypes = {
  publisherData: PropTypes.shape({
    publisherName: PropTypes.string,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.object,
};

export default PublisherInformation;
