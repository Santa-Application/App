// import {
//   PublisherInformation,
//   PostHeading,
//   RoundedTextBox,
//   Button,
// } from 'components';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import {
//   container,
//   imageContainer,
//   publisherInformationContainer,
//   headingContainer,
//   text,
//   buttonContainer,
// } from './RegularPostDetail.module.scss';

// // mock data
// import { regularPostData, userData } from '../../mock';
// const { imageUrl: publisherImageUrl } = userData[0];
// const {
//   publisherName,
//   postingDate,
//   views,
//   postTitle,
//   mountainName,
//   imageUrl,
//   content,
// } = regularPostData[0];

// const handler = e => {
//   console.log('버튼이 클릭 되었습니다!');
// };

// // component
// const RegularPost = ({ ...restProps }) => {
//   return (
//     <div className={container}>
//       <div className={imageContainer}>
//         <img src={imageUrl} alt="" />
//       </div>
//       <div className={publisherInformationContainer}>
//         <PublisherInformation
//           publisherData={{ publisherImageUrl, publisherName }}
//         />
//         <RoundedTextBox content={mountainName} />
//       </div>
//       <PostHeading
//         postData={{
//           postTitle,
//           postingDate,
//           views,
//         }}
//         className={{ headingContainer }}
//       />
//       <p className={text}>{content}</p>
//       {/* 내 리뷰 글이면 버튼 존재 */}
//       <div className={buttonContainer}>
//         <Button type="button" secondary={true} onClick={handler}>
//           삭제하기
//         </Button>
//         <Button type="button" onClick={handler}>
//           수정하기
//         </Button>
//       </div>
//     </div>
//   );
// };

// RegularPost.defaultProps = {};

// RegularPost.propTypes = {};

// export default RegularPost;
