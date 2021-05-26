import { Link } from 'react-router-dom';

import { ProfileImage } from 'components';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  container,
  title,
  recruiteesContainer,
  recruitees,
} from './StatusOfApplicationBox.module.scss';

const StatusOfApplicationBox = ({ recruiteesData, className }) => {
  const containerClasses = classNames(className.container, container);
  const titleClasses = classNames(className.title, title);

  return (
    <div className={containerClasses}>
      <p className={titleClasses}>신청 현황</p>
      <ul className={recruiteesContainer}>
        {recruiteesData.map(data => (
          <li key={data.recruiteeId}>
            <Link
              to={`/profile/${data.recruiteeName}/recruit`}
              component={() => (
                <ProfileImage
                  src={data.recruiteeImageURL}
                  size="small"
                  className={{ container: recruitees }}
                />
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

StatusOfApplicationBox.defaultProps = {
  recruiteesData: [],
  className: {},
};

StatusOfApplicationBox.propTypes = {
  recruiteesData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  className: PropTypes.object,
};

export default StatusOfApplicationBox;
