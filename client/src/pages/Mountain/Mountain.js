import { Heading, MenuTab } from 'components';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import MountainOverview from 'containers/MountainOverview/MountainOverview';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  mountainImage,
  mountainPage,
  mountainHeading,
  mountainTabContainer,
} from './Mountain.module.scss';

const Mountain = ({ history, match }) => {
  // mountain data dispatch
  const mountain = useSelector(state => state.mountain);
  const { data } = mountain;

  const mountainName = match.params.name;
  const mountainData = data.find(_data => _data.data.name === mountainName);
  const { imageURL } = mountainData;

  return (
    <main className={mountainPage}>
      <div className={mountainImage}>
        <img src={imageURL} alt="" />
        <Heading className={mountainHeading} content={match.params.name} />
      </div>
      <div className={mountainTabContainer}>
        {/* <MenuTab /> */}
        <MountainOverview
          history={history}
          match={match}
          mountainData={mountainData}
          data={data}
        />
      </div>
    </main>
  );
};

export default Mountain;
