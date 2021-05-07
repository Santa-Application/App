import { postDate } from 'utils';

/* eslint-disable indent */
export const postUserInfo = data => {
  return {
    imageURL: data.publisherInfo.imageURL,
    publisherName: data.publisherInfo.name,
  };
};

export const postHeading = data => {
  const { title, postDate, views } = data;

  return {
    title,
    postDate,
    views,
  };
};

export const recruitPostContents = data => {
  const {
    mountainName,
    recruitDate,
    recruitingGender,
    recruitingAge,
    hikingLevel,
    recruitingNumber,
    description,
  } = data;
  const contentsData = {
    mountainName,
    recruitDate: postDate.getPostDateInKorean(new Date(recruitDate)),
    recruitingGender:
      recruitingGender === 'female'
        ? '여성'
        : recruitingGender === 'male'
        ? '남성'
        : '상관없음',
    recruitingAge: `${recruitingAge[0]}~${recruitingAge[1]}세`,
    hikingLevel:
      hikingLevel === 'level1'
        ? '초급자'
        : hikingLevel === 'level2'
        ? '중급자'
        : '고급자',
    recruitingNumber: `${recruitingNumber}명`,
    description,
  };

  const contentsDataValues = Object.entries(contentsData);

  return contentsDataValues;
};
