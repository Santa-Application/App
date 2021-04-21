// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   PublisherInformation,
//   PostHeading,
//   RoundedTextBox,
//   StatusOfApplicationBox,
//   Button,
// } from 'components';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import {
//   container,
//   headingContainer,
//   contentsContainer,
//   statusOfRecruitees,
//   buttonContainer,
// } from './RecruitPostDetail.module.scss';

// // mock data
// import { recruitPostData, userData } from '../../mock';
// import { postDate } from 'utils';
// const { imageUrl: publisherImageUrl } = userData[0];
// const {
//   publisherName,
//   postingDate,
//   views,
//   postTitle,
//   mountainName,
//   recruitingDate,
//   recruitingLevels,
//   recruitingGender,
//   recruitingAge,
//   recruitingNumber,
//   description,
//   recruitees,
// } = recruitPostData[0];
// const contents = [
//   mountainName,
//   postDate.getPostDateInKorean(recruitingDate),
//   recruitingLevels.join(),
//   recruitingGender,
//   `${recruitingAge[0]} ~ ${recruitingAge[1]} 세`,
//   `${recruitingNumber} 명`,
//   description,
// ];
// const recruiteeImages = [userData[0].imageUrl, userData[1].imageUrl];

// // component
// const RecruitPost = ({ ...restProps }) => {
//   const [isApplied, setIsApplied] = useState(false);

//   const handleChangeButton = () => {
//     setIsApplied(!isApplied);
//   };

//   useEffect(() => {
//     const data = axios.get('http://localhost:8008/');
//     console.log(data);
//   }, []);

//   return (
//     <div className={container}>
//       <PublisherInformation
//         publisherData={{ publisherImageUrl, publisherName }}
//       />
//       <PostHeading
//         postData={{
//           postTitle,
//           postingDate,
//           views,
//         }}
//         className={{ headingContainer }}
//       />
//       <ul className={contentsContainer}>
//         {contents.map((content, index) => (
//           <li key={index}>
//             <RoundedTextBox content={content} />
//           </li>
//         ))}
//       </ul>
//       <StatusOfApplicationBox
//         images={recruiteeImages}
//         className={{ container: statusOfRecruitees }}
//       />
//       {/* 내 리뷰 글이면 수정하기 버튼, 아니면 메이트 신청/취소 버튼 */}
//       <div className={buttonContainer}>
//         <Button
//           type="button"
//           secondary={isApplied}
//           onClick={handleChangeButton}
//         >
//           {isApplied ? '메이트 취소' : '메이트 신청'}
//         </Button>
//       </div>
//     </div>
//   );
// };

// RecruitPost.defaultProps = {};

// RecruitPost.propTypes = {};

// export default RecruitPost;
