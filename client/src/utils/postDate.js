export const getPostDate = postDate => {
  const year = postDate.getFullYear();
  const month = postDate.getMonth() + 1;
  const date = postDate.getDate();

  return `${year}-${month}-${date}`;
};

export const getPostDateInKorean = postDate => {
  const year = postDate.getFullYear();
  const month = postDate.getMonth() + 1;
  const date = postDate.getDate();

  return `${year}년 ${month}월 ${date}일`;
};

export const getPostDateObject = postDate => {
  const year = postDate.getFullYear();
  const month = postDate.getMonth() + 1;
  const date = postDate.getDate();

  return {
    year,
    month,
    date,
  };
};

export const dateTime = postDate => {
  const dateArray = postDate.split('-');
  const date = dateArray[2].slice(0, 2);
  return `${dateArray[0]}-${dateArray[1]}-${date}`;
};

export const dateInKorean = postDate => {
  const dateArray = postDate.split('-');
  const date = dateArray[2].slice(0, 2);
  return `${dateArray[0]}년 ${dateArray[1]}월 ${date}일`;
};

export const getUserAge = userBirthDate => {
  const birthYear = userBirthDate.getFullYear();
  const today = new Date();
  const thisYear = today.getFullYear();

  return thisYear - birthYear;
};

export const getUserAgeWithText = userBirthDate => {
  const dateArray = userBirthDate.split('-');
  const birthYear = dateArray[0];
  const today = new Date();
  const thisYear = today.getFullYear();

  return thisYear - birthYear;
};
