import { Heading, ProfileImage, Tag } from 'components';
import { postDate, propTypesInterface } from 'utils';
import PropTypes from 'prop-types';
import {
  container,
  title,
  postInfo,
  tagList,
} from './RecruitPostCard.module.scss';

const RecruitPostCard = ({ publisherImageUrl, postData, ...restProps }) => {
  const {
    postTitle,
    mountainName,
    recruitingNumber: person,
    recruitingGender: gender,
    postingDate,
  } = postData;
  const { year, month, date } = postDate.getPostDateObject(postingDate);

  return (
    <div className={container} {...restProps}>
      <ProfileImage src={publisherImageUrl} size="medium" />
      <div className={postInfo}>
        <Heading level={3} className={title}>
          {postTitle}
        </Heading>
        <div className={tagList}>
          <Tag type="mountain" contents={{ mountainName }} />
          <Tag
            type="date"
            contents={{
              year,
              month,
              date,
            }}
          />
          <Tag type="person" contents={{ person }} />
          <Tag type="gender" contents={{ gender }} />
        </div>
      </div>
    </div>
  );
};

RecruitPostCard.defaultProps = {
  publisherImageUrl: '',
  postData: {
    publisherId: '',
    publisherName: '',
    postingDate: {},
    views: 0,
    mountainName: '',
    postTitle: '',
    recruitingDate: {},
    recruitingLevels: ['초급자'],
    recruitingGender: '상관없음',
    recruitingAge: { min: 1, max: 100 },
    recruitingNumber: 0,
    description: '',
    recruitees: [],
  },
};

RecruitPostCard.propTypes = {
  publisherImageUrl: PropTypes.string.isRequired,
  postData: PropTypes.shape(propTypesInterface.recruitPostData).isRequired,
};

export default RecruitPostCard;
