// import { getMountainByName } from 'api/mountainAPI';
import { Heading } from 'components';
import MountainInfo from 'components/MountainInfo/MountainInfo';
import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  mountainOverviewContainer,
  mountainInfoContainer,
} from './MountainOverview.module.scss';

const MountainOverview = ({
  mountainData,
  isLoading,
  data,
  error,
  match,
  history,
  ...restProps
}) => {
  if (isLoading)
    return (
      <div
        style={{
          color: '#666',
          fontSize: '2rem',
          margin: '5rem',
          marginBottom: '25rem',
        }}
      >
        로딩중임돠
      </div>
    );
  if (error)
    return (
      <div
        style={{
          color: '#666',
          fontSize: '2rem',
          margin: '5rem',
          marginBottom: '25rem',
        }}
      >
        에러났음돠
      </div>
    );
  if (!data)
    return (
      <div
        style={{
          color: '#666',
          fontSize: '2rem',
          margin: '5rem',
          marginBottom: '25rem',
        }}
      >
        데이터가 없음돠
      </div>
    );

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
