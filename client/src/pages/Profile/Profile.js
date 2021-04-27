import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
import { authAPI } from 'api';
import { postDate } from 'utils';

const Profile = ({ history, match, ...restProps }) => {
  const userName = match.params.userName;
  const loggedInUserInfo = useSelector(state => state.auth.userInfo);
  const loggedInUserName = loggedInUserInfo.name;
  const [userInfo, setUserInfo] = useState(null);
  const isLoggedInUser = userName === loggedInUserName;

  useEffect(() => {
    const setUserInfoAsync = async () => {
      if (isLoggedInUser) {
        setUserInfo(loggedInUserInfo);
      } else {
        const userInfoData = await authAPI.getUserInfoData(userName);
        setUserInfo(userInfoData.data);
      }
    };
    setUserInfoAsync();
  }, [userName]);

  if (!userInfo) return <div>로딩중임돠</div>;

  const handleClickUserImage = () => {
    history.push(`/${userName}`);
  };

  return (
    <main>
      <ProfileInfoCard
        name={userName}
        profileImageURL={userInfo.imageURL}
        gender={userInfo.gender}
        age={postDate.getUserAgeWithText(userInfo.dateOfBirth)}
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
              history={history}
              match={match}
            />
          )}
        />
        <Route
          path="/:userName/recruit/create"
          exact
          component={() => (
            <RecruitForm formType="create" history={history} match={match} />
          )}
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
              history={history}
              match={match}
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

export default Profile;
