import CarouselSlider from './CarouselSlider'
import { MountainCard, RegularPostCard } from 'components'

/* -------------------------------------------------------------------------- */
const sampleImage = 'https://user-images.githubusercontent.com/42370712/116492007-2dcfe880-a8d6-11eb-9f51-04b9975bc183.jpg';
const sampleImage2 = 'https://user-images.githubusercontent.com/42370712/116492266-cb2b1c80-a8d6-11eb-81f8-6d1a52cdc606.jpg';
const sampleImage3 = 'https://user-images.githubusercontent.com/42370712/116492346-fd3c7e80-a8d6-11eb-8f5f-66ee0755ce88.jpg';
const sampleImage4 = 'https://user-images.githubusercontent.com/42370712/116492381-12191200-a8d7-11eb-9e56-8f76a65763ee.jpg';
/* ------------------------------------------------------------------- */

export default {
  title: 'Components/CarouselSlider',
  component: CarouselSlider,
  argTypes: {
    slides: {
      name: 'slides',
      control: { type: 'object' },
      description: '캐러셀에 들어오는 아이템들이 담긴 배열입니다. 배열의 각 아이템은 html 요소이거나 React 요소여야 합니다.',
      table: {
        type: {
          summary: 'array',
        }
      },
    },
    emulateTouch: {
      name: 'emulateTouch',
      control: { type: 'boolean' },
      description: '스와이핑 가능 여부를 결정합니다.',
      table: {
        type: {
          summary: 'boolean',
        }
      },
    },
    autoPlay: {
      name: 'autoPlay',
      control: { type: 'boolean' },
      description: '자동재생 여부를 결정합니다.',
      table: {
        type: {
          summary: 'boolean',
        }
      },
    },
    centerMode: {
      name: 'centerMode',
      control: { type: 'boolean' },
      description: '슬라이드의 view가 항상 가운데 정렬되느지 여부를 결정합니다.',
      table: {
        type: {
          summary: 'boolean',
        }
      },
    },
    infiniteLoop: {
      name: 'infiniteLoop',
      control: { type: 'boolean' },
      description: '캐러셀에 무한루프를 돌게할지를 결정합니다.',
      table: {
        type: {
          summary: 'boolean',
        }
      },
    },
    showArrows: {
      name: 'showArrows',
      control: { type: 'boolean' },
      description: '캐러셀에 양옆으로 가기 버튼의 display여부를 결정합니다.',
      table: {
        type: {
          summary: 'boolean',
        }
      },
    },
    useKeyboardArrows: {
      name: 'useKeyboardArrows',
      control: { type: 'boolean' },
      description: '키보드를 사용해서 캐러셀을 양옆으로 이동시킬 수 있는지 여부를 결정합니다.',
      table: {
        type: {
          summary: 'boolean',
        }
      },
    },
    width: {
      name: 'width',
      description: '캐러셀 뷰의 width를 결정합니다. 한 캐러셀만 보고싶다면 들어가는 아이템 한개의 width로 설정해줍니다.',
      table: {
        type: {
          summary: 'number or text',
        }
      },
    },
    showThumbs: {
      name: 'showThumbs',
      description: '캐러셀 아래에 전체 캐러셀 요약을 표시하는지 여부를 결정합니다.',
      table: {
        type: {
          summary: 'boolean',
        }
      },
    },
  }
}

const Template = (args) => <CarouselSlider {...args} />

export const Sample = Template.bind({});
Sample.args = {
  slides: [
    <MountainCard key={'MountainCard-1'} to={'/'} background={sampleImage}/>,
    <MountainCard key={'MountainCard-2'} to={'/'} background={sampleImage2}/>,
    <MountainCard key={'MountainCard-3'} to={'/'} background={sampleImage3}/>,
    <MountainCard key={'MountainCard-4'} to={'/'} background={sampleImage4}/>,
  ],
  emulateTouch: true,
  autoPlay: false,
  centerMode: false,
  infiniteLoop: true,
  showArrows: false,
  useKeyboardArrows: false,
  width: '32rem',
  showThumbs: false
}