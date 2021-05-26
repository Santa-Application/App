import { useCallback, useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {
  UserInformation,
  PostHeading,
  RoundedBox,
  StatusOfApplicationBox,
  Button,
} from 'components';
import {
  toggleApplyRecruitingAsync,
  removeRecruitPostAsync,
} from 'redux/modules/recruitPost';
import { dataFilteringUtils } from 'utils';

import PropTypes from 'prop-types';
import {
  container,
  headingContainer,
  contentsContainer,
  statusOfRecruitees,
  buttonContainer,
} from './RecruitPostDetail.module.scss';
import usePostDetail from 'Hooks/usePostDetail';

const RecruitPostDetail = ({ pageInfo }) => {
  // const history = useHistory();
  // const params = useParams();

  // const userId = useSelector(state => state.auth.userInfo._id);
  // const recruitPostsData = useSelector(state => state.recruitPost);
  // const dispatch = useDispatch();

  // const postId = useMemo(() => params.postId);

  // const postData = recruitPostsData?.data.find(
  //   _data => _data.recruitPost._id === postId
  // );

  // const { recruitPost } = postData;
  // const publisherId = postData.publisherInfo._id;
  // const isUserPublisher = publisherId === userId;

  const [isApplied, setIsApplied] = useState(false);
  const [postData, isUserPublisher, handlers] = usePostDetail(pageInfo);
  const { recruitPost } = postData;
  const { handleClickEditPost, handleClickRemovePost } = handlers;

  // const handleChangeApplyRecruitingButton = useCallback(async () => {
  //   await dispatch(toggleApplyRecruitingAsync(postId, userId));
  //   setIsApplied(!isApplied);
  // }, [dispatch, postId, userId, isApplied]);

  return (
    <div className={container}>
      <UserInformation
        userData={dataFilteringUtils.filterPostUserInfoData(postData)}
      />
      <PostHeading
        postData={dataFilteringUtils.filterPostHeadingData(recruitPost)}
        className={{ headingContainer }}
      />
      <ul className={contentsContainer}>
        {dataFilteringUtils
          .filterRecruitPostContentsData(recruitPost)
          .map((content, index) => {
            return (
              <li key={index}>
                <RoundedBox>{content[1]}</RoundedBox>
              </li>
            );
          })}
      </ul>
      <StatusOfApplicationBox
        recruiteesData={recruitPost.recruitees}
        className={{ container: statusOfRecruitees }}
      />
      <div className={buttonContainer}>
        {isUserPublisher ? (
          <>
            <Button type="button" secondary onClick={handleClickRemovePost}>
              삭제하기
            </Button>
            <Button type="button" onClick={handleClickEditPost}>
              수정하기
            </Button>
          </>
        ) : (
          <Button
            type="button"
            secondary={isApplied}
            // onClick={handleChangeApplyRecruitingButton}
          >
            {isApplied ? '메이트 취소' : '메이트 신청'}
          </Button>
        )}
      </div>
    </div>
  );
};

RecruitPostDetail.defaultProps = {
  pageInfo: {
    postType: 'recruit',
  },
};

RecruitPostDetail.propTypes = {
  pageInfo: PropTypes.object,
};

export default RecruitPostDetail;
