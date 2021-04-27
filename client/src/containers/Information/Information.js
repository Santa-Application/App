import {
  ReviewCarousel,
} from 'containers';
import {
  RegularPostCard,
  MountainCard,
  CarouselSlider,
  Heading
} from 'components';
import {
  heading,
  informationContainer,
  reviewCarouselContainerTop
} from './Information.module.scss';

const Information = () => {

  /* -------------------------------------------------------------------------- */
  const mockPostData = {
    title: '산 탈꼬아',
    postDate:  '2021-04-23', 
    imageURL: 'https://health.chosun.com/site/data/img_dir/2019/04/30/2019043001641_0.jpg',
    mountainName: '인완산'
  };  

  const mountainBG = 'https://user-images.githubusercontent.com/42370712/116192755-3e168500-a769-11eb-892e-e42407baad85.jpg';

  const mockMountain = [
    <MountainCard mountainName={'인왕산'} background={mountainBG}/>,
    <MountainCard mountainName={'인왕산'} background={mountainBG}/>,
    <MountainCard mountainName={'인왕산'} background={mountainBG}/>,
    <MountainCard mountainName={'인왕산'} background={mountainBG}/>,
  ];
  const mockReviews = [
    <RegularPostCard postData={mockPostData}/>,
    <RegularPostCard postData={mockPostData}/>,
    <RegularPostCard postData={mockPostData}/>,
    <RegularPostCard postData={mockPostData}/>,
  ];

  return (
    <div className={informationContainer}>
      <div>
        <Heading
          level={3}
          content={'좋아요 TOP 5'}
          className={heading}
        />
        <CarouselSlider
          slides={mockMountain}
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
        slides={mockReviews}
        slideWidth={'50'}
        centerSlidePercentage={50}
        className={reviewCarouselContainerTop}
      />
    </div>
  );
};

export default Information;
