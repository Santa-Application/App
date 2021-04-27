import ReviewCarousel from './ReviewCarousel'
import { RegularPostCard } from 'components'

/* mock data-------------------------------------------------------------------------- */

const mockPostData = {
  title: '산 탈꼬아',
  postDate:  '2021-04-23', 
  imageURL: 'https://health.chosun.com/site/data/img_dir/2019/04/30/2019043001641_0.jpg',
  mountainName: '인완산'
}

/* ------------------------------------------------------------------- */

export default {
  title: 'Containers/ReviewCarousel',
  component: ReviewCarousel,
}

const Template = (args) => <ReviewCarousel {...args} />

export const Sample = Template.bind({})
Sample.args = {
  head: '최신 리뷰',
  slides: [
    <RegularPostCard postData={mockPostData}/>,
    <RegularPostCard postData={mockPostData}/>,
    <RegularPostCard postData={mockPostData}/>,
    <RegularPostCard postData={mockPostData}/>,
  ],
  slidesWidth: '5rem',
  centerSlidePercentage: 55
}

