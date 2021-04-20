import { postDate } from 'utils';

export const getRecruitPostListData = (postListData, usersImageUrl) =>
  postListData.map((postData, index) => {
    const gender = postData.recruitingGender;
    let genderContent = '';
    switch (gender) {
      case 'female':
        genderContent = '여성';
        break;
      case 'male':
        genderContent = '남성';
        break;
      case 'genderBoth':
      default:
        genderContent = '상관없음';
        break;
    }

    return {
      ...postData,
      recruitingDate: postDate.getPostDateInKorean(postData.recruitingDate),
      publisherImageUrl: usersImageUrl[index],
      recruitingGenderText: genderContent,
    };
  });
