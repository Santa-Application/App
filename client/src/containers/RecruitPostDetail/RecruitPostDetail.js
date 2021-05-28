import { useState } from 'react';

import {
  UserInformation,
  PostHeading,
  RoundedBox,
  StatusOfApplicationBox,
  Button,
} from 'components';
import { dataFilteringUtils } from 'utils';
import { usePostDetail } from 'Hooks';

import PropTypes from 'prop-types';
import {
  container,
  headingContainer,
  contentsContainer,
  statusOfRecruitees,
  buttonContainer,
} from './RecruitPostDetail.module.scss';

const RecruitPostDetail = ({ pageInfo }) => {
  const [isApplied, setIsApplied] = useState(false);

  const [postData, isUserPublisher, handlers] = usePostDetail(
    pageInfo,
    isApplied,
    setIsApplied
  );

  const { recruitPost } = postData;
  const {
    handleClickEditPost,
    handleClickRemovePost,
    handleChangeApplyRecruitingButton,
  } = handlers;

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
            onClick={handleChangeApplyRecruitingButton}
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
