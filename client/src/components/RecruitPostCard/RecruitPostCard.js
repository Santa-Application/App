import { Heading, ProfileImage, Tag } from 'components';
import { propTypeSchema } from 'utils';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  container,
  title,
  postInfo,
  tagList,
} from './RecruitPostCard.module.scss';

const RecruitPostCard = ({ postData, className, ...restProps }) => {
  const { recruitPost, publisherInfo } = postData;

  let genderContent = '';
  switch (recruitPost.recruitingGender) {
    case 'female':
      genderContent = '여성';
      break;
    case 'male':
      genderContent = '남성';
      break;
    case 'genderBoth':
      genderContent = '상관없음';
      break;
    default:
      break;
  }

  const containerClasses = className?.container
    ? classNames(className.container, container)
    : container;

  return (
    <div className={containerClasses}>
      <ProfileImage src={publisherInfo.imageURL} size="medium" />
      <div className={postInfo}>
        <Heading
          level={3}
          className={title}
          content={recruitPost.title}
        ></Heading>
        <div className={tagList}>
          <Tag type="mountain" content={recruitPost.mountainName} />
          {/* <Tag type="date" content={getPostDateInKorean(recruitDate)} /> */}
          <Tag type="date" content={recruitPost.recruitDate} />
          <Tag type="person" content={`${recruitPost.recruitingNumber}명`} />
          <Tag type={recruitPost.recruitingGender} content={genderContent} />
        </div>
      </div>
    </div>
  );
};

RecruitPostCard.defaultProps = {
  postData: {
    publisherInfo: {
      imageURL: '',
      name: '',
    },
    recruitPost: {
      title: '',
      mountainName: '',
      hikingLevel: 'level1',
      recruitDate: '',
      recruitingNumber: 1,
      recruitingGender: 'genderBoth',
    },
  },
  className: {},
};

RecruitPostCard.propTypes = {
  postData: PropTypes.object.isRequired,
  className: PropTypes.objectOf(PropTypes.string),
};

export default RecruitPostCard;
