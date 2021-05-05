import {
  Button,
  Logo,
  Tag,
  Icon,
  Navigation,
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
  closeButton,
  menuButton,
} from './Header.module.scss';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signoutUserAsync } from 'redux/modules/auth';
import { INITIALIZE_RECRUIT_POST } from 'redux/modules/recruitPost';
import { INITIALIZE_REGULAR_POST } from 'redux/modules/regularPost';

import { useHistory } from "react-router-dom";

const Header = ({ style, title, href }) => {
  
  const history = useHistory(); 
  const navBgRef = useRef();
  const navRef = useRef();
  const signedIn = useSelector(state => state.auth.signedIn);
  const dispatch = useDispatch();

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

  const handleClickMenuButtons = ({ target }) => {
    if (target.tagName !== 'A') return;
    navBgRef.current.classList.remove(activeBg);
    navRef.current.classList.remove(activeNav);
  };

  const handleClickSignout = () => {
    dispatch(signoutUserAsync());
    dispatch({ type: INITIALIZE_RECRUIT_POST });
    dispatch({ type: INITIALIZE_REGULAR_POST });

    navBgRef.current.classList.remove(activeBg);
    navRef.current.classList.remove(activeNav);

    history.push('/');
  };

  const handleClickGoBackButton = () => {
    history.goBack();
  };

  const handleClickLogo = () => {
    signedIn ? history.push('/main') : history.push('/');
  };

  const handleClickOutsideMenu = () => handleNavMenu();

  return (
    <div className={header}>
      {history.location.pathname !== '/' && (
        <Button
          {...commonProps}
          value={'Go back button'}
          onClick={handleClickGoBackButton}
          className={closeButton}
        >
          <Icon shape={'back'} />
        </Button>
      )}
      <Button
        {...commonProps}
        value={'Logo button, goes to HomePage'}
        onClick={handleClickLogo}
      >
        <Logo style={style} title={title} href={href} />
      </Button>
      {signedIn && (
        <>
          <Button
            {...commonProps}
            value={'Menu button'}
            onClick={handleNavMenu}
            className={menuButton}
          >
            <Icon shape={'menu'} />
          </Button>
          <div
            className={navBackground}
            ref={navBgRef}
            onClick={handleClickOutsideMenu}
          ></div>
          <section
            className={nav}
            ref={navRef}
            onClick={handleClickMenuButtons}
          >
            <div className={menu}>
              <Navigation label={'메뉴 바'} className={navMenu} />
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
        </>
      )}
    </div>
  );
};

export default Header;
