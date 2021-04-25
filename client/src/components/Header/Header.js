import {
  Button,
  Logo,
  Tag,
  Icon,
  Navigation,
  PublisherInformation,
} from 'components';
import {
  header,
  navBackground,
  nav,
  signoutButton,
  menu,
  navMenu,
  navCloseButton,
  activeBg,
  activeNav,
} from './Header.module.scss';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signoutUserAsync } from 'redux/modules/auth';
import { checkPropTypes } from 'prop-types';

const Header = ({ history, mode, style, title, href, userData }) => {
  const navBgRef = useRef();
  const navRef = useRef();
  const dispatch = useDispatch();
  const signedIn = sessionStorage.getItem('userInfo');
  // const signedIn = true;

  const commonProps = {
    secondary: false,
    type: 'button',
    disabled: false,
  };

  const handleNavMenu = () => {
    navBgRef.current.classList.toggle(activeBg);
    navRef.current.classList.toggle(activeNav);

    !navBgRef.current.classList.contains(activeBg)
      ? navBgRef.current.setAttribute('aria-hidden', 'true')
      : navBgRef.current.setAttribute('aria-hidden', 'false');
  };
  const handleClickMenuButtons = e => {
    if (e.target.tagName !== 'A') return;
    navBgRef.current.classList.remove(activeBg);
    navRef.current.classList.remove(activeNav);
  };
  const handleClickSignout = () => {
    dispatch(signoutUserAsync());

    navBgRef.current.classList.remove(activeBg);
    navRef.current.classList.remove(activeNav);

    history.push('/');
  };
  const hadleClickGoBackButton = () => {
    history.goBack();
  };
  const handleClickLogo = () => {
    signedIn ? history.push('/main') : history.push('/');
  };

  return (
    <div className={header}>
      <Button
        {...commonProps}
        value={'Go back button'}
        onClick={hadleClickGoBackButton}
      >
        <Icon shape={'back'} />
      </Button>
      <Button
        {...commonProps}
        value={'Logo button, goes to HomePage'}
        onClick={handleClickLogo}
      >
        <Logo style={style} title={title} href={href} />
      </Button>
      {signedIn && (
        <Button {...commonProps} value={'Menu button'} onClick={handleNavMenu}>
          <Icon shape={'menu'} />
        </Button>
      )}
      <div className={navBackground} ref={navBgRef}>
        <section className={nav} ref={navRef}>
          <div className={menu}>
            <PublisherInformation publisherData={userData} />
            <Navigation
              label={'메뉴 바'}
              className={navMenu}
              onClick={handleClickMenuButtons}
            />
          </div>
          <Button
            {...commonProps}
            value={'logout button'}
            className={signoutButton}
            onClick={handleClickSignout}
          >
            <Tag type={'signout'} content={'sign out'} />
          </Button>
          <Button
            {...commonProps}
            value={'side menu bar close'}
            onClick={handleNavMenu}
            className={navCloseButton}
            aria-label={'Side menu close button'}
            children={'메뉴 닫기'}
          >
            <Icon shape={'close'} />
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Header;
