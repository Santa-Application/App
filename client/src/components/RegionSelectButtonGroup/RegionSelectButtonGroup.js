import { RegionSelectButton } from 'components';
import { container, button } from './RegionSelectButtonGroup.module.scss';

const RegionSelectButtonGroup = ({ ...restProps }) => {
  return (
    <div className={container}>
      <RegionSelectButton
        type="seoul"
        content="서울/경기도"
        className={button}
      />
      <RegionSelectButton type="gangwon" content="강원도" className={button} />
      <RegionSelectButton
        type="chungcheong"
        content="충청도"
        className={button}
      />
      <RegionSelectButton
        type="gyeongsang"
        content="경상도"
        className={button}
      />
      <RegionSelectButton type="jeolla" content="전라도" className={button} />
      <RegionSelectButton type="jeju" content="제주도" className={button} />
    </div>
  );
};

export default RegionSelectButtonGroup;
