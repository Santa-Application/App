import { ProfileImage } from 'components';
import PropTypes from 'prop-types';
import { container, name } from './PublisherInformation.module.scss';

const WriterInformation = ({ publisherData, className, ...restProps }) => {
  return (
    <div className={container}>
      <ProfileImage src={publisherData.imageUrl} size="medium" />
      <span className={name}>{publisherData.name}</span>
    </div>
  );
};

WriterInformation.defaultProps = {
  publisherData: {},
  className: '',
};

WriterInformation.propTypes = {
  publisherData: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default WriterInformation;
