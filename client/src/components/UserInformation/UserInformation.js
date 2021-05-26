import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ProfileImage } from 'components';

import PropTypes from 'prop-types';
import { container, name } from './UserInformation.module.scss';

const UserInformation = ({ userData }) => {
  useEffect(() => {
    if (!userData) return null;
  }, [userData]);

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
};

UserInformation.propTypes = {
  userData: PropTypes.shape({
    publisherName: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInformation;
