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

    !navBgRef.current.classList.contains(activeBg) ?
      navBgRef.current.setAttribute('aria-hidden', 'true') :
      navBgRef.current.setAttribute('aria-hidden', 'false');
  };


  return (
    <div className={header}>
      <Button 
        {...commonProps}
        value={'Go back button'}
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
          >
            <Tag type={'signout'} content={'sign out'} />
          </Button>
          <Button 
            {...commonProps} 
            value={'side menu bar close'}
            onClick={handleNavMenu}
            className={navCloseButton}
          >
            <Icon shape={'close'}/>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Header;
