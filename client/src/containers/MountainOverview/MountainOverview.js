import MountainInfo from 'components/MountainInfo/MountainInfo';
import React from 'react';
import { mountainInfoContainer } from './MountainOverview.module.scss';

const MountainOverview = ({
  mountainData,
  data,
  match,
  history,
  ...restProps
}) => {
  return (
    <div>
      <div className={mountainInfoContainer}>
        <MountainInfo
          subTitleText="정보"
          description={mountainData.data.description}
          lineBreak={true}
        />
        <MountainInfo
          subTitleText="높이"
          description={`해발고도 ${mountainData.data.elevation}m`}
        />
      </div>
    </div>
  );
};

export default MountainOverview;
