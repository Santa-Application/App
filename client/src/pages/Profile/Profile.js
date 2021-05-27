import { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useParams,
} from 'react-router-dom';

import {
  RecruitPostList,
  RecruitPostForm,
  RecruitPostDetail,
  RegularPostList,
  RegularPostDetail,
  RegularPostForm,
} from 'containers';
import { ProfileInfoCard, MenuTab } from 'components';
import { authAPI } from 'api';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const history = useHistory();
  const params = useParams();
  const userName = useMemo(() => params.userName, [params]);
  const loggedInUserInfo = useSelector(state => state.auth.userInfo);
  const loggedInUserName = useMemo(() => loggedInUserInfo.name, [
    loggedInUserInfo,
  ]);
  const isLoggedInUserPage = useMemo(() => userName === loggedInUserName, [
    userName,
    loggedInUserName,
  ]);

  const menuInfo = useMemo(
    () => [
      { name: 'Recruit', path: `/profile/${userName}/recruit` },
      { name: 'Reviews', path: `/profile/${userName}/reviews` },
    ],
    [userName]
  );
  const pageInfo = useMemo(
    () => ({
      recruit: { type: 'profile', params: userName, postType: 'recruit' },
      regular: { type: 'profile', params: userName, postType: 'regular' },
    }),
    [userName]
  );
  const recruitPageInfo = pageInfo.recruit;
  const regularPageInfo = pageInfo.regular;

  const handleClickUserInfoEditButton = useCallback(() => {
    history.push(`/profile/${userName}/edit`);
  }, [history, userName]);

  useEffect(() => {
    (async () => {
      if (isLoggedInUserPage) {
        setUserInfo(loggedInUserInfo);
      } else {
        const userInfoData = await authAPI.getUserInfoData(userName);
        setUserInfo(userInfoData.data);
      }
    })();
  }, [userName, loggedInUserInfo, isLoggedInUserPage]);

  return (
    <main>
      <ProfileInfoCard
        name={userName}
        profileImageURL={userInfo?.imageURL}
        gender={userInfo?.gender}
        age={userInfo?.dateOfBirth}
        level={userInfo?.hikingLevel}
        introduction={userInfo?.introduction}
        onClick={handleClickUserInfoEditButton}
      />
      <MenuTab menus={menuInfo} label="profile tab list" />
      <Switch>
        <Route
          path="/profile/:userName/recruit"
          exact
          component={() => (
            <RecruitPostList
              pageInfo={{
                ...recruitPageInfo,
                isPossibleToWrite: isLoggedInUserPage,
              }}
            />
          )}
        />
        <Route
          path="/profile/:userName/recruit/create"
          exact
          component={() => <RecruitPostForm pageInfo={recruitPageInfo} />}
        />
        <Route
          path="/profile/:userName/recruit/edit/:postId"
          exact
          component={() => (
            <RecruitPostForm pageInfo={recruitPageInfo} formType="edit" />
          )}
        />
        <Route
          path="/profile/:userName/recruit/:postId"
          exact
          component={() => <RecruitPostDetail pageInfo={recruitPageInfo} />}
        />
        <Route
          path="/profile/:userName/reviews"
          exact
          component={() => (
            <RegularPostList
              pageInfo={{
                ...regularPageInfo,
                isPossibleToWrite: isLoggedInUserPage,
              }}
            />
          )}
        />
        <Route
          path="/profile/:userName/reviews/create"
          exact
          component={() => <RegularPostForm pageInfo={regularPageInfo} />}
        />
        <Route
          path="/profile/:userName/reviews/edit/:postId"
          exact
          component={() => (
            <RegularPostForm pageInfo={regularPageInfo} formType="edit" />
          )}
        />
        <Route
          path={`/profile/:userName/reviews/:postId`}
          component={() => <RegularPostDetail pageInfo={regularPageInfo} />}
        />
        <Redirect
          from="/profile/:userName"
          to={`/profile/${userName}/recruit`}
        />
      </Switch>
    </main>
  );
};

export default Profile;
