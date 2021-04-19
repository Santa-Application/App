import { Button, Logo, Icon }  from 'components';
import { header } from './Header.module.scss';

const Header = ({ mode, style, title, href }) => {

  const commonProps = { 
    secondary: false, 
    type: 'button', 
    disabled: false
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
      >
        <Icon shape={'menu'} />
      </Button>
    </div>
  );
};

export default Header;
