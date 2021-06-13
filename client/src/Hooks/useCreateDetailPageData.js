import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const useCreateDetailPageData = pageInfo => {
  const postType = pageInfo.postType;
  const postDataName = `${postType}Post`;

  const params = useParams();
  const postId = params.postId;
  const userId = useSelector(state => state.auth.userInfo._id);

  const postData = useSelector(state =>
    state[postDataName].data.find(data => data[postDataName]?._id === postId)
  );

  const publisherId = postData?.publisherInfo?._id;
  const isUserPublisher = publisherId === userId;

  return [postData, isUserPublisher];
};

export default useCreateDetailPageData;
