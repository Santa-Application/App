const pagePath = {
  profile: '/profile/',
  mountains: '/mountains/',
};
const postPath = {
  recruit: '/recruit/',
  reviews: '/reviews/',
};
const formPath = {
  create: 'create/',
  edit: 'edit/',
};

export const createListPagePath = pageInfo =>
  `${pageInfo.type ? pagePath[pageInfo.type] : ''}${
    pageInfo.params ? pageInfo.params : ''
  }${postPath[pageInfo.postType]}`;

export const createDetailPagePath = (pageInfo, postId) =>
  `${pageInfo.type ? pagePath[pageInfo.type] : ''}${
    pageInfo.params ? pageInfo.params : ''
  }${postPath[pageInfo.postType]}${postId}`;

export const createFormPagePath = (pageInfo, formType, postId) => {
  return `${pageInfo.type ? pagePath[pageInfo.type] : ''}${
    pageInfo.params ? pageInfo.params : ''
  }${postPath[pageInfo.postType]}${formPath[formType]}${postId ? postId : ''}`;
};
