import { RecruitPostCard } from 'components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { recruitPostCard } from './RecruitPostList.module.scss';

const RecruitPostList = ({ postsData, className, ...restProps }) => {
  return (
    <ul>
      {postsData.map(post => (
        <li key={post._id}>
          <a href="/">
            <RecruitPostCard
              postData={post}
              className={{ container: recruitPostCard }}
            />
          </a>
        </li>
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
