import { ReactComponent as SeoulGyeonggi } from './assets/서울경기.svg';
import { ReactComponent as Gangwon } from './assets/강원도.svg';
import { ReactComponent as Gyeongsang } from './assets/경상도.svg';
import { ReactComponent as Jeolla } from './assets/전라도.svg';
import { ReactComponent as Chungcheong } from './assets/충청도.svg';
import { ReactComponent as Jeju } from './assets/제주도.svg';

import {
  areaComponent
} from './AreaCategory.module.scss';
import { Button } from 'components';
import { object, func } from 'prop-types';

const AreaCategory = ({ district, onClick }) => {

  let SVGComponent = '';

  switch (district) {
    default:
    case '서울/경기도':
      SVGComponent = SeoulGyeonggi;
      break;
    case '강원도':
      SVGComponent = Gangwon;
      break;
    case '경상도':
      SVGComponent = Gyeongsang;
      break;
    case '전라도':
      SVGComponent = Jeolla;
      break;
    case '충청도':
      SVGComponent = Chungcheong;
      break;
    case '제주도':
      SVGComponent = Jeju;
      break;
  }

  return (
    <Button
      secondary={false}
      type={'button'}
      disabled={false}
      value={`${district} 지역 산들 보기`}
      className={areaComponent}
      onClick={onClick}
    >
      <SVGComponent />
      {district}
    </Button>     
  );
};

export default AreaCategory;

AreaCategory.propTypes = {
  district: object,
  onClick: func
};