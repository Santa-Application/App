const pagePath = {
  profile: '/profile/',
  mountain: '/mountains/',
};
const postPath = {
  recruit: '/recruit/',
  regular: '/reviews/',
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

export const createFormPagePath = (pageInfo, formType, postId) =>
  `${pageInfo.type ? pagePath[pageInfo.type] : ''}${
    pageInfo.params ? pageInfo.params : ''
  }${postPath[pageInfo.postType]}${formPath[formType]}${postId ? postId : ''}`;

export const moveToListPage = history => pageInfo => {
  history.push(createListPagePath(pageInfo));
};

export const moveToDetailPage = history => (pageInfo, postId) => {
  history.push(createDetailPagePath(pageInfo, postId));
};

export const moveToFormPagePath = history => (pageInfo, postId, formType) => {
  history.push(createFormPagePath(pageInfo, formType, postId));
};
