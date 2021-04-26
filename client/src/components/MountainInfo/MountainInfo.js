import React from 'react';

import {
  containerNowrap,
  containerWrap,
  // whiteSpace,
} from './MountainInfo.module.scss';

const MountainInfo = ({ subTitleText, description, lineBreak }) => {
  return (
    <>
      {lineBreak ? (
        <div className={containerWrap}>
          <em>{subTitleText}</em>
          <p>{description}</p>
        </div>
      ) : (
        <div className={containerNowrap}>
          <em>{subTitleText}</em>
          <p>{description}</p>
        </div>
      )}
    </>
  );
};

export default MountainInfo;

MountainInfo.defaultProps = {
  lineBreak: false,
};
