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
  const userName = userInfo.name;
  // const LoggedInUserName = useSelector(state => state.auth.userInfo);
  // const userName = match.params.userName;
  // const userInfo = ?????

  console.log(history.location);
  const [selected, setSelected] = useState(0);

  const handleClickMenuTab = () => {
    setSelected(history.location.pathname === `/${userName}/recruit` ? 0 : 1);
  };
  const handleClickUserImage = () => {
    history.push(`/${userName}`);
  };

  if (!userInfo) return <div>없는 유져임돠</div>;

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
        selected={selected}
        onClick={handleClickMenuTab}
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
        <Redirect from="/:userName" to={`/${userName}/recruit`} />

        <Route
          path="/:userName/recruit/:postId"
          exact
          component={() => (
            <RecruitPostDetail history={history} match={match} />
          )}
        />
        {/* <Route
            path="/:userName/recruit/edit/:postId"
            exact
            component={RecruitForm}
            /> */}
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
        {/* <Route
          path={`/:userName/reviews/create`}
          component={RegularPostForm}
        />
        <Route
          path={`/:userName/reviews/:postId`}
          component={RegularPostDetail}
        /> */}
      </Switch>
    </main>
  );
};

export default UserRecruitList;
