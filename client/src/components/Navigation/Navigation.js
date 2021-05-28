import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavigationItem, UserInformation } from 'components';
import { string } from 'prop-types';
import { navContainer } from './Navigation.module.scss';

const Navigation = ({ label, onClick, className }) => {
  const auth = useSelector(state => state.auth);

  return (
    <>
      <UserInformation
        userData={{
          imageURL: auth.userInfo.imageURL,
          publisherName: auth.userInfo.name,
        }}
      />
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
