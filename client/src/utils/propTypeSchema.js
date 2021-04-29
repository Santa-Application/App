import PropTypes from 'prop-types';

export const recruitPost = {
  publisherId: PropTypes.string,
  publisherName: PropTypes.string,
  postingDate: PropTypes.object, // 나중에 Date객체로 변경될 것임
  views: PropTypes.number,
  mountainName: PropTypes.string,
  postTitle: PropTypes.string,
  recruitingDate: PropTypes.object, // 나중에 Date객체로 변경될 것임
  recruitingLevels: PropTypes.arrayOf(
    PropTypes.oneOf(['level1', 'level2', 'level3'])
  ),
  recruitingGender: PropTypes.oneOf(['female', 'male', 'genderBoth']),
  recruitingAge: PropTypes.arrayOf(PropTypes.number), // [28, 33]
  recruitingNumber: PropTypes.number,
  description: PropTypes.string,
  recruitees: PropTypes.arrayOf(PropTypes.string),
};

export const regularPost = {
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

export const user = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  imageUrl: PropTypes.string,
  gender: PropTypes.oneOf(['female', 'male']),
  dateOfBirth: PropTypes.object, // 나중에 Date객체로 변경될 것임
  hikingLevel: PropTypes.oneOf(['level1', 'level2', 'level3']),
  introduction: PropTypes.string,
  regularPosts: PropTypes.arrayOf(PropTypes.string),
  recruitPosts: PropTypes.arrayOf(PropTypes.string),
  followers: PropTypes.number,
  following: PropTypes.arrayOf(PropTypes.string), // user.name를 요소로 갖는 배열
};

export const recruitPostCard = {
  publisherInfo: {
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  },
  recruitPost: {
    title: PropTypes.string.isRequired,
    mountainName: PropTypes.string.isRequired,
    hikingLevel: PropTypes.oneOf(['level1', 'level2', 'level3']).isRequired,
    recruitDate: PropTypes.string.isRequired, // 나중에 Date객체로 변경될 것임
    recruitingGender: PropTypes.oneOf(['female', 'male', 'genderBoth'])
      .isRequired,
    recruitingNumber: PropTypes.number.isRequired,
  },
};

export const regularPostCard = {
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  mountainName: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired, // 나중에 Date객체로 변경될 것임
};

export const postHeading = {
  title: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired, // 나중에 Date객체로 변경될 것임
  views: PropTypes.number,
};
