import { ProfileImage } from 'components';
import PropTypes from 'prop-types';
import { container, name } from './PublisherInformation.module.scss';

const PublisherInformation = ({ publisherData, className, ...restProps }) => {
  if (!publisherData) return null;

  return (
    <div className={container}>
      <ProfileImage src={publisherData.imageURL} size="medium" />
      <span className={name}>{publisherData.publisherName}</span>
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
