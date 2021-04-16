import { RecruitPostCard } from 'components';
import { api } from 'utils';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { recruitPostCard } from './RecruitPostList.module.scss';

// mock data
import { recruitPostData, userData } from 'mock';
const usersImageData = userData.map(({ imageUrl }) => imageUrl);
const recruitPostListData = recruitPostData.map(
  ({
    postTitle,
    mountainName,
    recruitingDate,
    recruitingNumber,
    recruitingGender,
  }) => {
    return {
      postTitle,
      mountainName,
      recruitingDate,
      recruitingNumber,
      recruitingGender,
    };
  }
);
const postListData = api.getRecruitPostListData(
  recruitPostListData,
  usersImageData
);

// component
const RecruitPostList = ({ className, ...restProps }) => {
  const recruitPostCardClasses = classNames(recruitPostCard);

  return (
    <ul>
      {postListData.map((postData, index) => (
        <RecruitPostCard
          key={index}
          postData={{
            ...postData,
          }}
          className={{ container: recruitPostCardClasses }}
        />
      ))}
    </ul>
  );
};

RecruitPostList.defaultProps = {
  className: '',
};

RecruitPostList.propTypes = {
  className: PropTypes.string,
};

export default RecruitPostList;
