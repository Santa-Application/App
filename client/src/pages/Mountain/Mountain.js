import { Route, Switch, Redirect, useParams } from 'react-router-dom';
import { Heading, MenuTab } from 'components';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import MountainOverview from 'containers/MountainOverview/MountainOverview';
import {
  RecruitPostList,
  RecruitPostDetail,
  RecruitForm,
  RegularPostDetail,
  RegularPostList,
  RegularPostForm,
} from 'containers';
// import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  mountainImage,
  // mountainPage,
  mountainHeading,
  // mountainInfoContainer,
} from './Mountain.module.scss';

const Mountain = () => {
  const params = useParams();
  const mountainName = params.mountainName;
  const mountain = useSelector(state => state.mountain);
  const { isLoading, data, error } = mountain;

  const mountainData = data.find(_data => _data.data.name === mountainName);
  const { imageURL } = mountainData;

  if (isLoading) return <LoadingIcon />;
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
    <>
      <div className={mountainImage}>
        <img src={imageURL} alt="" />
        <Heading className={mountainHeading} content={params.mountainName} />
      </div>
      <main>
        <div>
          <MenuTab
            menus={[
              { name: 'Overview', path: `/mountains/${mountainName}/overview` },
              { name: 'Recruit', path: `/mountains/${mountainName}/recruit` },
              { name: 'Reviews', path: `/mountains/${mountainName}/reviews` },
            ]}
            label="profile tab list"
          />
          <Switch>
            <Route
              path="/mountains/:mountainName/recruit"
              exact
              component={() => (
                <RecruitPostList
                  pageInfo={{ type: 'mountain', mountainName }}
                />
              )}
            />
            <Route
              path="/mountains/:mountainName/recruit/create"
              exact
              component={() => <RecruitForm formType="create" />}
            />

            <Route
              path="/mountains/:mountainName/recruit/:postId"
              exact
              component={RecruitPostDetail}
            />
            <Route
              path="/mountains/:mountainName/recruit/edit/:postId"
              exact
              component={RecruitForm}
            />
            <Route
              path="/mountains/:mountainName/reviews/create"
              exact
              component={() => <RegularPostForm formType="create" />}
            />
            <Route
              path="/mountains/:mountainName/reviews"
              exact
              component={() => (
                <RegularPostList
                  pageInfo={{ type: 'mountain', mountainName }}
                />
              )}
            />
            <Route
              path={`/mountains/:mountainName/reviews/:postId`}
              component={RegularPostDetail}
            />
            <Route
              path="/mountains/:mountainName/overview"
              exact
              component={() => (
                <MountainOverview mountainData={mountainData} data={data} />
              )}
            />
            <Redirect
              from={`/mountains/${mountainName}`}
              to={`/mountains/${mountainName}/overview`}
            />
          </Switch>
        </div>
      </main>
    </>
  );
};

export default Mountain;
