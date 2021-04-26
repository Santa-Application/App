import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import {
  RecruitPostList,
  RecruitForm,
  RecruitPostDetail,
  RegularPostList,
  RegularPostDetail,
  RegularPostForm,
} from 'containers';
import { ProfileInfoCard, MenuTab } from 'components';

const UserRecruitList = ({ history, match, ...restProps }) => {
  const userInfo = useSelector(state => state.auth.userInfo);
  if (!userInfo) return <div>없는 유져임돠</div>;
  const userName = userInfo.name;

  const handleClickUserImage = () => {
    history.push(`/${userName}`);
  };

  // const isLoggedInUser = userName === LoggedInUserName;
  const isLoggedInUser = true;

  return (
    <main>
      <ProfileInfoCard
        name={userName}
        imageURL={userInfo.imageURL}
        gender={userInfo.gender}
        age={userInfo.age}
        level={userInfo.hikingLevel}
        introduction={userInfo.introduction}
        onClick={handleClickUserImage}
      />
      <MenuTab
        menus={[
          { name: 'Recruit', path: `/${userName}/recruit` },
          { name: 'Reviews', path: `/${userName}/reviews` },
        ]}
        label="profile tab list"
      />
      <Switch>
        <Route
          path="/:userName/recruit"
          exact
          component={() => (
            <RecruitPostList
              pageInfo={{ type: 'profile', userName, isLoggedInUser }}
            />
          )}
        />
        <Route
          path="/:userName/recruit/create"
          exact
          component={() => <RecruitForm formType="create" />}
        />

        <Route
          path="/:userName/recruit/:postId"
          exact
          component={RecruitPostDetail}
        />
        {/* <Route
            path="/:userName/recruit/edit/:postId"
            exact
            component={RecruitForm}
            /> */}
        <Route
          path="/:userName/reviews/create"
          exact
          component={() => (
            <RegularPostForm
              formType="create"
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/:userName/reviews"
          exact
          component={() => (
            <RegularPostList
              pageInfo={{ type: 'profile', userName, isLoggedInUser }}
            />
          )}
        />
        <Route
          path={`/:userName/reviews/:postId`}
          component={RegularPostDetail}
        />
        <Redirect from="/:userName" to={`/${userName}/recruit`} />
      </Switch>
    </main>
  );
};

export default UserRecruitList;
