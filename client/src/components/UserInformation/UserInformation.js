import { Link } from 'react-router-dom';

import { ProfileImage } from 'components';

import PropTypes from 'prop-types';
import { container, name } from './UserInformation.module.scss';

const UserInformation = ({ userData }) => {
  if (!userData) return null;

  const { imageURL, publisherName } = userData;
  return (
    <div className={container}>
      <ProfileImage src={imageURL} size="medium" />
      <Link to={`/profile/${publisherName}`} className={name}>
        {publisherName}
      </Link>
    </div>
  );
};

UserInformation.defaultProps = {
  userData: {
    publisherName: '',
    imageURL: '',
  },
  className: {},
};

UserInformation.propTypes = {
  userData: PropTypes.shape({
    publisherName: PropTypes.string,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.object,
};

export default UserInformation;
