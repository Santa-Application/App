import {
  ReviewCarousel,
} from 'containers';
import {
  RegularPostCard,
  RecruitPostCard,
  MountainCard,
  CarouselSlider,
  Heading, 
  Icon
} from 'components';
import {
  heading,
  informationContainer,
  reviewCarouselContainerTop
} from './Information.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getRegularPostsAsync } from 'redux/modules/regularPost';
import { getRecruitPostsAsync } from 'redux/modules/recruitPost';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Information = ({ history, match }) => {

  /*좋아요 top 5 갖고오기 -------------------------------------------------------------------------- */

  
  const mountains = useSelector(state => state.mountain);
  const topFive = mountains.data ? 
    [...mountains.data.sort((first, second) => first.likes - second.likes).slice(0, 5)] : [];
    /* // 최신 리뷰글, 모집글들 갖고오기------------------------------------------------------------------------- */
  const mountainCards = topFive.map(mountain => (<MountainCard 
    mountainName={mountain.data.name} 
    to={`/mountain/${mountain.data.name}`} 
    background={mountain.imageURL}
  />));
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getInformations = () => {
      dispatch(getRegularPostsAsync());
      dispatch(getRecruitPostsAsync());
    };
    getInformations();
  }, [dispatch]);

  const reviews = useSelector(state => state.regularPost.data);
  const recruits = useSelector(state => state.recruitPost.data);

  const newReviewsTen = reviews
    .slice(0, 10)
    .map(review => (<RegularPostCard postData={review.regularPost} />)    
    );
  const newRecruitsThree = recruits
    .slice(0, 3)
    .map(recruit => (<RecruitPostCard postData={recruit} />));

  /* -------------------------------------------------------------------------- */
  // 데이터 넣어주기

  return (
    <div className={informationContainer}>
      <div>
        <Heading
          level={3}
          content={'좋아요 TOP 5'}
          className={heading}
        />
        <CarouselSlider
          slides={mountainCards}
          emulateTouch={true}
          autoPlay={false}
          centerMode={true}
          infiniteLoop={true}
          showArrows={false}
          useKeyboardArrows={true}
          width={'32rem'}
          showThumbs={false}
          centerSlidePercentage={100}
        />
      </div>
      <ReviewCarousel
        head={'최신 리뷰'}
        slides={newReviewsTen}
        slideWidth={'50'}
        centerSlidePercentage={50}
        className={reviewCarouselContainerTop}
      />
      <div>
        <Heading
          level={3}
          content={'최신 모집 글'}
          className={heading}
        />
        <ul>
          {
            newRecruitsThree.map((recruit, index) =>
              (<li key={index}>{recruit}</li>))
          }
        </ul>
        <Link to={'/recruit'}>
          더보기
          <Icon shape={'more'} />
        </Link>
      </div>
    </div>
  );
};

export default Information;
