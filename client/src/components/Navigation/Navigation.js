import { NavigationItem } from 'components';
import { string } from 'prop-types';

const Navigation = ({ label, className }) => {
  return (
    <nav
      aria-label={label}
      className={className}
    >
      <ul
        role={'menubar'}
        aria-label={label}
      >
        <li
          role={'none'}
        >
          <a 
            role={'menuitem'}
            href={'/mountains'}
          >
            <NavigationItem shape={'navMountains'} title={'mountains'}/>
          </a>
        </li>
        <li
          role={'none'}
        >
          <a
            role={'menuitem'}
            href={'/recruitposts'}>
            <NavigationItem shape={'navRecruits'} title={'recruit post'}/>
          </a>
        </li>
        <li
          role={'none'}
        >
          <a
            role={'menuitem'}
            href={'/regularposts'}
          >
            <NavigationItem shape={'navReviews'} title={'reviews'}/>
          </a>
        </li>
        <li
          role={'none'}
        >
          <a
            role={'menuitem'}
            href={'/profile'}
          >
            <NavigationItem shape={'navProfile'} title={'profile'}/>
          </a>
        </li> 
      </ul>
    </nav>
  );
};

export default Navigation;

Navigation.defaultProps = {
  label: '메뉴'
};

Navigation.propTypes = {
  label: string.isRequired,
};