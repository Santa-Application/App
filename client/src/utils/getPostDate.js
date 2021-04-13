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
