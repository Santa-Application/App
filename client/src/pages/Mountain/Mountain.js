import { Route, Switch, Redirect, useParams } from 'react-router-dom';
import { Error, Heading, MenuTab } from 'components';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import MountainOverview from 'containers/MountainOverview/MountainOverview';
import {
  RecruitPostList,
  RecruitPostDetail,
  RecruitPostForm,
  RegularPostDetail,
  RegularPostList,
  RegularPostForm,
} from 'containers';
// import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  mountainImage,
  // mountainPage,
  mountainHeading,
  // mountainInfoContainer,
} from './Mountain.module.scss';

const Mountain = () => {
  const params = useParams();
  const mountainName = useMemo(() => params.mountainName, [params]);
  const mountain = useSelector(state => state.mountain);
  const { isLoading, data, error } = mountain;
  const mountainData = data.find(_data => _data.data.name === mountainName);

  const menuInfo = useMemo(
    () => [
      { name: 'Overview', path: `/mountains/${mountainName}/overview` },
      { name: 'Recruit', path: `/mountains/${mountainName}/recruit` },
      { name: 'Reviews', path: `/mountains/${mountainName}/reviews` },
    ],
    [mountainName]
  );
  const pageInfo = useMemo(
    () => ({
      recruit: {
        type: 'mountain',
        params: mountainName,
        postType: 'recruit',
        isPossibleToWrite: true,
      },
      regular: {
        type: 'mountain',
        params: mountainName,
        postType: 'regular',
        isPossibleToWrite: true,
      },
    }),
    [mountainName]
  );
  const recruitPageInfo = pageInfo.recruit;
  const regularPageInfo = pageInfo.regular;

  useEffect(() => {
    if (isLoading) return <LoadingIcon />;
    if (error) return <Error />;
  }, [isLoading, error]);

  return (
    <>
      <div className={mountainImage}>
        <img src={mountainData.imageURL} alt="" />
        <Heading className={mountainHeading} content={params.mountainName} />
      </div>
      <main>
        <MenuTab menus={menuInfo} label="profile tab list" />
        <Switch>
          <Route
            path="/mountains/:mountainName/overview"
            exact
            component={() => (
              <MountainOverview mountainData={mountainData} data={data} />
            )}
          />
          <Route
            path="/mountains/:mountainName/recruit"
            exact
            component={() => <RecruitPostList pageInfo={recruitPageInfo} />}
          />
          <Route
            path="/mountains/:mountainName/recruit/create"
            exact
            component={() => (
              <RecruitPostForm pageInfo={recruitPageInfo} formType="create" />
            )}
          />
          <Route
            path="/mountains/:mountainName/recruit/edit/:postId"
            exact
            component={() => (
              <RecruitPostForm pageInfo={recruitPageInfo} formType="edit" />
            )}
          />
          <Route
            path="/mountains/:mountainName/recruit/:postId"
            exact
            component={() => <RecruitPostDetail pageInfo={recruitPageInfo} />}
          />
          <Route
            path="/mountains/:mountainName/reviews"
            exact
            component={() => <RegularPostList pageInfo={regularPageInfo} />}
          />
          <Route
            path="/mountains/:mountainName/reviews/create"
            exact
            component={() => (
              <RegularPostForm pageInfo={regularPageInfo} formType="create" />
            )}
          />
          <Route
            path="/mountains/:mountainName/reviews/edit/:postId"
            exact
            component={() => (
              <RegularPostForm pageInfo={regularPageInfo} formType="edit" />
            )}
          />
          <Route
            path={`/mountains/:mountainName/reviews/:postId`}
            component={() => <RegularPostDetail pageInfo={regularPageInfo} />}
          />
          <Redirect
            from={`/mountains/${mountainName}`}
            to={`/mountains/${mountainName}/overview`}
          />
        </Switch>
      </main>
    </>
  );
};

export default Mountain;
