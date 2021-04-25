import { useSelector, useDispatch } from 'react-redux';

import { RecruitPostList } from 'containers';
import { ProfileInfoCard, MenuTab } from 'components';

const UserRecruitList = ({ history, match, ...restProps }) => {
  const userInfo = useSelector(state => state.auth.userInfo);

  return (
    <main>
      <ProfileInfoCard
        name={userInfo.name}
        imageURL={userInfo.imageURL}
        gender={userInfo.gender}
        age={userInfo.age}
        level={userInfo.hikingLevel}
        introduction={userInfo.introduction}
        onClick={userInfo.onClick}
      />
      <MenuTab
        menus={['Recruit', 'Reviews']}
        label="profile tab list"
        selected={2}
      />
      <RecruitPostList />
    </main>
  );
};

export default UserRecruitList;
