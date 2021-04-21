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
  const {
    description,
    imageURL,
    mountainName: mountain,
    recruitDate,
    recruitingNumber: person,
    recruitingSex: gender,
  } = postData;
  let genderContent = '';
  switch (gender) {
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

  const containerClasses = classNames(className.container, container);

  return (
    <div className={containerClasses}>
      <ProfileImage src={imageURL} size="medium" />
      <div className={postInfo}>
        <Heading level={3} className={title} content={description}></Heading>
        <div className={tagList}>
          <Tag type="mountain" content={mountain} />
          <Tag type="date" content={recruitDate} />
          <Tag type="person" content={`${person}명`} />
          <Tag type={gender} content={genderContent} />
        </div>
      </div>
    </div>
  );
};

RecruitPostCard.defaultProps = {
  postData: {
    title: '',
    imageURL: '',
    mountainName: '',
    recruitDate: '',
    recruitingNumber: 0,
    recruitingSex: 'genderBoth',
  },
  className: {},
};

RecruitPostCard.propTypes = {
  postData: PropTypes.exact(propTypeSchema.recruitPostCard).isRequired,
  className: PropTypes.objectOf(PropTypes.string),
};

export default RecruitPostCard;
