import PropTypes from 'prop-types';

export const recruitPostData = {
  publisherId: PropTypes.string,
  publisherName: PropTypes.string,
  postingDate: PropTypes.object, // Date 객체
  views: PropTypes.number,
  mountainName: PropTypes.string,
  postTitle: PropTypes.string,
  recruitingDate: PropTypes.object, // Date 객체
  recruitingLevels: PropTypes.arrayOf(
    PropTypes.oneOf(['level1', 'level2', 'level3'])
  ),
  recruitingGender: PropTypes.oneOf(['female', 'male', 'genderBoth']),
  recruitingAge: PropTypes.objectOf(PropTypes.number), // { min: 28, max: 35 }
  recruitingNumber: PropTypes.number,
  description: PropTypes.string,
  recruitees: PropTypes.arrayOf(PropTypes.string),
};

export const regularPostData = {
  publisherId: PropTypes.string,
  publisherName: PropTypes.string,
  postingDate: PropTypes.object,
  views: PropTypes.number,
  likes: PropTypes.number,
  postTitle: PropTypes.string,
  mountainName: PropTypes.string,
  imageUrl: PropTypes.string,
  content: PropTypes.string,
};

export const userData = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  imageUrl: PropTypes.string,
  gender: PropTypes.oneOf(['female', 'male']),
  dateOfBirth: PropTypes.object, // Date 객체
  hikingLevel: PropTypes.oneOf(['level1', 'level2', 'level3']),
  introduction: PropTypes.string,
  regularPosts: PropTypes.arrayOf(PropTypes.string),
  recruitPosts: PropTypes.arrayOf(PropTypes.string),
  followers: PropTypes.number,
  following: PropTypes.arrayOf(PropTypes.string), // user.name를 요소로 갖는 배열
};

export const recruitPostCardData = {
  postTitle: PropTypes.string,
  mountainName: PropTypes.string,
  recruitingDate: PropTypes.object, // Date 객체
  recruitingNumber: PropTypes.number,
  recruitingGender: PropTypes.oneOf(['female', 'male', 'genderBoth']),
};

export const regularPostCardData = {
  postTitle: PropTypes.string,
  imageUrl: PropTypes.string,
  mountainName: PropTypes.string,
  postingDate: PropTypes.object, // Date 객체
};
