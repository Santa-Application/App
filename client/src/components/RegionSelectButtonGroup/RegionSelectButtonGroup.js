import { RegionSelectButton } from 'components';

import { container } from './RegionSelectButtonGroup.module.scss';

const RegionSelectButtonGroup = () => {
  return (
    <div className={container}>
      <RegionSelectButton type="seoul" content="서울/경기도" />
      <RegionSelectButton type="gangwon" content="강원도" />
      <RegionSelectButton type="chungcheong" content="충청도" />
      <RegionSelectButton type="gyeongsang" content="경상도" />
      <RegionSelectButton type="jeolla" content="전라도" />
      <RegionSelectButton type="jeju" content="제주도" />
    </div>
  );
};

export default RegionSelectButtonGroup;
