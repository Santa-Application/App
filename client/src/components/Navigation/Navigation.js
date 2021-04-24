import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavigationItem, PublisherInformation } from 'components';
import { string } from 'prop-types';
import { navContainer } from './Navigation.module.scss';

const Navigation = ({ label, onClick, className }) => {
  // const auth = useSelector(state => state.auth);
  // const { isLoading, error, userInfo } = auth;

  // if (isLoading)
  //   return (
  //     <div
  //       style={{
  //         color: '#666',
  //         fontSize: '2rem',
  //         margin: '5rem',
  //         marginBottom: '25rem',
  //       }}
  //     >
  //       로딩중임돠
  //     </div>
  //   );
  // if (error)
  //   return (
  //     <div
  //       style={{
  //         color: '#666',
  //         fontSize: '2rem',
  //         margin: '5rem',
  //         marginBottom: '25rem',
  //       }}
  //     >
  //       에러났음돠
  //     </div>
  //   );
  // if (!userInfo)
  //   return (
  //     <div
  //       style={{
  //         color: '#666',
  //         fontSize: '2rem',
  //         margin: '5rem',
  //         marginBottom: '25rem',
  //       }}
  //     >
  //       데이터가 없음돠
  //     </div>
  //   );

  return (
    <>
      {/* <PublisherInformation
        publisherData={{
          imageURL: auth.userInfo.imageURL,
          publisherName: auth.userInfo.name,
        }}
      /> */}
      <nav aria-label={label} className={className} onClick={onClick}>
        <ul role={'menubar'} aria-label={label} className={navContainer}>
          <li role={'none'}>
            <NavLink role={'menuitem'} exact to={'/mountains'}>
              <NavigationItem shape={'navMountains'} title={'mountains'} />
            </NavLink>
          </li>
          <li role={'none'}>
            <NavLink role={'menuitem'} exact to={'/recruit'}>
              <NavigationItem shape={'navRecruits'} title={'recruit post'} />
            </NavLink>
          </li>
          <li role={'none'}>
            <NavLink role={'menuitem'} exact to={'/reviews'}>
              <NavigationItem shape={'navReviews'} title={'reviews'} />
            </NavLink>
          </li>
          <li role={'none'}>
            <NavLink role={'menuitem'} exact to={'/profile'}>
              <NavigationItem shape={'navProfile'} title={'profile'} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

Navigation.defaultProps = {
  label: '메뉴',
};

Navigation.propTypes = {
  label: string.isRequired,
};
