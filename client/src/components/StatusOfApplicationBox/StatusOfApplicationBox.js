import { ProfileImage } from 'components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  container,
  title,
  recruiteesContainer,
  recruitees,
} from './StatusOfApplicationBox.module.scss';

const StatusOfApplicationBox = ({
  recruiteesData,
  className,
  ...restProps
}) => {
  const containerClasses = classNames(className.container, container);
  const titleClasses = classNames(className.title, title);

  return (
    <div className={containerClasses}>
      <p className={titleClasses}>신청 현황</p>
      <div className={recruiteesContainer}>
        {recruiteesData.map((data, index) => (
          <ProfileImage
            key={data.id}
            src={data.imageURL}
            size="small"
            className={{ container: recruitees }}
          />
        ))}
      </div>
    </div>
  );
};

StatusOfApplicationBox.defaultProps = {
  images: [],
  className: {},
};

StatusOfApplicationBox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.object,
};

export default StatusOfApplicationBox;
