import { 
  Button, 
  Logo,
  Tag,
  Icon, 
  Navigation, 
  PublisherInformation 
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
  activeNav
} from './Header.module.scss';
import { useRef } from 'react';
import { checkPropTypes } from 'prop-types';

const Header = ({ mode, style, title, href, userData }) => {

  const navBgRef = useRef();
  const navRef = useRef();

  const commonProps = { 
    secondary: false, 
    type: 'button', 
    disabled: false
  };

  const handleNavMenu = () => {
    navBgRef.current.classList.toggle(activeBg);
    navRef.current.classList.toggle(activeNav);

    if (!navBgRef.current.classList.contains(activeBg)) {
      navBgRef.current.setAttribute('aria-hidden', 'true');
      navBgRef.current.setAttribute('tabindex', '-1');
    } else {
      navBgRef.current.setAttribute('aria-hidden', 'false');
      navBgRef.current.setAttribute('tabindex', '0');
    }
  };


  return (
    <div className={header}>
      <Button 
        {...commonProps}
        value={'Go back button'}
        aria-label={'Go back button'}
        children={'되돌아가기'}
      >
        <Icon shape={'back'}/> 
      </Button>
      <Button
        {...commonProps}
        value={'Logo button, goes to HomePage'}
      >
        <Logo style={style} title ={title} href={href}/>
      </Button>
      <Button
        {...commonProps}
        value={'Menu button'}
        onClick={handleNavMenu}
        aria-label={'Menu button open and close'}
        children={'메뉴 열기'}
      >
        <Icon shape={'menu'} />
      </Button>
      <div className={navBackground} ref={navBgRef}>
        <section className={nav} ref={navRef}>
          <div className={menu}>
            <PublisherInformation 
              publisherData={userData}
            />
            <Navigation label={'메뉴 바'} className={navMenu} />
          </div>
          <Button
            {...commonProps}
            value={'logout button'}
            className={signoutButton}
            aria-label={'logout button'}
            children={'로그아웃'}
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
            <Icon shape={'close'}/>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Header;
