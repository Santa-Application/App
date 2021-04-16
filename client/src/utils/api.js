import { postDate } from 'utils';

export const getRecruitPostListData = (postListData, usersImageUrl) =>
  postListData.map((postData, index) => ({
    ...postData,
    recruitingDate: postDate.getPostDateInKorean(postData.recruitingDate),
    publisherImageUrl: usersImageUrl[index],
  }));
