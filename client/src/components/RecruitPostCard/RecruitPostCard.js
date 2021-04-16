import { Heading, ProfileImage, Tag } from 'components';
import { propTypeInterface } from 'utils';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  container,
  title,
  postInfo,
  tagList,
} from './RecruitPostCard.module.scss';

const RecruitPostCard = ({ postData, className, ...restProps }) => {
  const {
    publisherImageUrl,
    postTitle,
    recruitingDate,
    mountainName,
    recruitingNumber: person,
    recruitingGender: gender,
  } = postData;

  const containerClasses = classNames(className.container, container);

  return (
    <div className={containerClasses} {...restProps}>
      <ProfileImage src={publisherImageUrl} size="medium" />
      <div className={postInfo}>
        <Heading level={3} className={title} content={postTitle}></Heading>
        <div className={tagList}>
          <Tag type="mountain" contents={{ mountainName }} />
          <Tag type="date" contents={{ recruitingDate }} />
          <Tag type="person" contents={{ person }} />
          <Tag type="gender" contents={{ gender }} />
        </div>
      </div>
    </div>
  );
};

RecruitPostCard.defaultProps = {
  postData: {
    publisherImageUrl: '',
    postTitle: '',
    mountainName: '',
    recruitingDate: '',
    recruitingNumber: 0,
    recruitingGender: '상관없음',
  },
};

RecruitPostCard.propTypes = {
  postData: PropTypes.exact(propTypeInterface.recruitPostCardData).isRequired,
};

export default RecruitPostCard;
