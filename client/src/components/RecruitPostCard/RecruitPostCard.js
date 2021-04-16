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
    mountainName: mountain,
    recruitingNumber: person,
    recruitingGender: gender,
    recruitingGenderText,
  } = postData;

  const containerClasses = classNames(className.container, container);

  return (
    <div className={containerClasses}>
      <ProfileImage src={publisherImageUrl} size="medium" />
      <div className={postInfo}>
        <Heading level={3} className={title} content={postTitle}></Heading>
        <div className={tagList}>
          <Tag type="mountain" content={mountain} />
          <Tag type="date" content={recruitingDate} />
          <Tag type="person" content={`${person}명`} />
          <Tag type={gender} content={recruitingGenderText} />
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
    recruitingGender: 'genderBoth',
    recruitingGenderText: '상관없음',
  },
  className: {},
};

RecruitPostCard.propTypes = {
  postData: PropTypes.exact(propTypeInterface.recruitPostCardData).isRequired,
  className: PropTypes.objectOf(PropTypes.string),
};

export default RecruitPostCard;
