import { Route, Switch, Redirect, useParams } from 'react-router-dom';
import { Error, Heading, MenuTab } from 'components';
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
import React, { useEffect } from 'react';
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

  const pageInfo = {
    recruit: { type: 'profile', params: mountainName, postType: 'recruit' },
    reviews: { type: 'profile', params: mountainName, postType: 'reviews' },
  };

  useEffect(() => {
    if (isLoading) return <LoadingIcon />;
    if (error) return <Error />;
  }, [isLoading, error]);
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
              path="/mountains/:mountainName/overview"
              exact
              component={() => (
                <MountainOverview mountainData={mountainData} data={data} />
              )}
            />
            <Route
              path="/mountains/:mountainName/recruit"
              exact
              component={() => <RecruitPostList pageInfo={pageInfo.recruit} />}
            />
            <Route
              path="/mountains/:mountainName/recruit/create"
              exact
              component={() => (
                <RecruitForm pageInfo={pageInfo.recruit} formType="create" />
              )}
            />
            <Route
              path="/mountains/:mountainName/recruit/edit/:postId"
              exact
              component={() => (
                <RecruitForm pageInfo={pageInfo.recruit} formType="edit" />
              )}
            />
            <Route
              path="/mountains/:mountainName/recruit/:postId"
              exact
              component={() => (
                <RecruitPostDetail pageInfo={pageInfo.recruit} />
              )}
            />
            <Route
              path="/mountains/:mountainName/reviews"
              exact
              component={() => <RegularPostList pageInfo={pageInfo.reviews} />}
            />
            <Route
              path="/mountains/:mountainName/reviews/create"
              exact
              component={() => (
                <RegularPostForm
                  pageInfo={pageInfo.reviews}
                  formType="create"
                />
              )}
            />
            <Route
              path="/mountains/:mountainName/reviews/edit/:postId"
              exact
              component={() => (
                <RegularPostForm pageInfo={pageInfo.reviews} formType="edit" />
              )}
            />
            <Route
              path={`/mountains/:mountainName/reviews/:postId`}
              component={() => (
                <RegularPostDetail pageInfo={pageInfo.reviews} />
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
