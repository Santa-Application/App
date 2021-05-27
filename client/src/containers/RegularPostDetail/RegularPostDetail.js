import { UserInformation, PostHeading, RoundedBox, Button } from 'components';
import { dataFilteringUtils } from 'utils';
import { usePostDetail } from 'Hooks';

import PropTypes from 'prop-types';
import {
  imageContainer,
  publisherInformationContainer,
  headingContainer,
  text,
} from './RegularPostDetail.module.scss';

const RegularPostDetail = ({ pageInfo }) => {
  const [postData, isUserPublisher, handlers] = usePostDetail(pageInfo);
  const { regularPost } = postData;
  const { handleClickEditPost, handleClickRemovePost } = handlers;

  return (
    <div>
      <div className={imageContainer}>
        <img src={regularPost.imageURL} alt="" />
      </div>
      <div className={publisherInformationContainer}>
        <UserInformation
          userData={dataFilteringUtils.filterPostUserInfoData(postData)}
        />
        <RoundedBox>{regularPost.mountainName}</RoundedBox>
      </div>
      <PostHeading
        postData={dataFilteringUtils.filterPostHeadingData(regularPost)}
        className={{ headingContainer }}
      />
      <p className={text}>{regularPost.content}</p>
      {isUserPublisher && (
        <div className="buttonContainer">
          <Button type="button" secondary onClick={handleClickRemovePost}>
            삭제하기
          </Button>
          <Button type="button" onClick={handleClickEditPost}>
            수정하기
          </Button>
        </div>
      )}
    </div>
  );
};

RegularPostDetail.defaultProps = {
  pageInfo: {
    postType: 'regular',
  },
};
RegularPostDetail.propTypes = {
  pageInfo: PropTypes.object,
};

export default RegularPostDetail;
