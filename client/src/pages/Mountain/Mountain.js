import { Heading, MenuTab } from 'components';
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
  const { isLoading, data, error } = mountain;

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
          isLoading={isLoading}
          data={data}
          error={error}
        />
      </div>
    </main>
  );
};

export default Mountain;
