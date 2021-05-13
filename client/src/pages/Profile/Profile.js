import { useEffect, useState } from 'react';
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
  RecruitForm,
  RecruitPostDetail,
  RegularPostList,
  RegularPostDetail,
  RegularPostForm,
} from 'containers';
import { ProfileInfoCard, MenuTab } from 'components';
import { authAPI } from 'api';

const Profile = () => {
  const history = useHistory();
  const params = useParams();

  const userName = params.userName;
  const loggedInUserInfo = useSelector(state => state.auth.userInfo);
  const loggedInUserName = loggedInUserInfo.name;
  const [userInfo, setUserInfo] = useState(null);
  const isLoggedInUser = userName === loggedInUserName;

  const pageInfo = {
    recruit: { type: 'profile', params: userName, postType: 'recruit' },
    reviews: { type: 'profile', params: userName, postType: 'reviews' },
  };

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
  }, [userName, loggedInUserInfo, isLoggedInUser]);

  const handleClickUserInfoEditButton = () => {
    history.push(`/profile/${userName}/edit`);
  };

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
      <MenuTab
        menus={[
          { name: 'Recruit', path: `/profile/${userName}/recruit` },
          { name: 'Reviews', path: `/profile/${userName}/reviews` },
        ]}
        label="profile tab list"
      />
      <Switch>
        <Route
          path="/profile/:userName/recruit"
          exact
          component={() => (
            <RecruitPostList
              pageInfo={{ ...pageInfo.recruit, isLoggedInUser }}
            />
          )}
        />
        <Route
          path="/profile/:userName/recruit/create"
          exact
          component={() => (
            <RecruitForm pageInfo={pageInfo.recruit} formType="create" />
          )}
        />
        <Route
          path="/profile/:userName/recruit/edit/:postId"
          exact
          component={() => (
            <RecruitForm pageInfo={pageInfo.recruit} formType="edit" />
          )}
        />
        <Route
          path="/profile/:userName/recruit/:postId"
          exact
          component={() => <RecruitPostDetail pageInfo={pageInfo.recruit} />}
        />
        <Route
          path="/profile/:userName/reviews"
          exact
          component={() => (
            <RegularPostList
              pageInfo={{ ...pageInfo.reviews, isLoggedInUser }}
            />
          )}
        />
        <Route
          path="/profile/:userName/reviews/create"
          exact
          component={() => (
            <RegularPostForm pageInfo={pageInfo.reviews} formType="create" />
          )}
        />
        <Route
          path="/profile/:userName/reviews/edit/:postId"
          exact
          component={() => (
            <RegularPostForm pageInfo={pageInfo.reviews} formType="edit" />
          )}
        />
        <Route
          path={`/profile/:userName/reviews/:postId`}
          component={() => <RegularPostDetail pageInfo={pageInfo.reviews} />}
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
