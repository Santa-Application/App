import AreaCategory from './AreaCategory'

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/AreaCategory',
  component: AreaCategory,
  argTypes: {
    district: {
      name: 'district',
      description: '지역을 한글로 넣어주세요.',
      options: ['서울/경기도', '강원도', '경상도', '전라도', '충청도', '제주도']
    },
    onClick: {
      name: 'onClick',
      description: '클릭했을때 이벤트함수를 받습니다.'
    }

  }
}

const Template = (args) => <AreaCategory {...args} />

export const Sample = Template.bind({});
Sample.args = {
  district: '서울경기',
  onClick: () => {
    alert('서울경기!');
  }
}
export const Gangwon = Template.bind({});
Gangwon.args = {
  district: '강원도',
  onClick: () => {
    alert('강원도!');
  }
}
export const Gyeongsang = Template.bind({});
Gyeongsang.args = {
  district: '경상도',
  onClick: () => {
    alert('경상도!');
  }
}
export const Jeju = Template.bind({});
Jeju.args = {
  district: '제주도',
  onClick: () => {
    alert('제주도!');
  }
}
export const Jeolla = Template.bind({});
Jeolla.args = {
  district: '전라도',
  onClick: () => {
    alert('전라도!');
  }
}
export const Chungcheong = Template.bind({});
Chungcheong.args = {
  district: '충청도',
  onClick: () => {
    alert('충청도!');
  }
}
