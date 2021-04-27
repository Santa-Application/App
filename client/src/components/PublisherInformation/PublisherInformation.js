import { Link } from 'react-router-dom';
import { ProfileImage } from 'components';
import PropTypes from 'prop-types';
import { container, name } from './PublisherInformation.module.scss';

const PublisherInformation = ({ publisherData, className, ...restProps }) => {
  if (!publisherData) return null;

  const { imageURL, publisherName } = publisherData;
  return (
    <div className={container}>
      <ProfileImage src={imageURL} size="medium" />
      <Link to={`/${publisherName}`} className={name}>
        {publisherName}
      </Link>
    </div>
  );
};

// PublisherInformation.defaultProps = {
//   publisherData: {
//     publisherName: '',
//     publisherImageUrl: '',
//   },
//   className: {},
// };

// PublisherInformation.propTypes = {
//   publisherData: PropTypes.exact({
//     publisherName: PropTypes.string,
//     publisherImageUrl: PropTypes.string,
//   }).isRequired,
//   className: PropTypes.object,
// };

export default PublisherInformation;
