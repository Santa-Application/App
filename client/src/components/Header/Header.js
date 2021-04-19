import { Button, Logo, Icon }  from 'components';

const Header = ({ mode }) => {

  const commonProps = { 
    secondary: false, 
    type: 'button', 
    disabled: false
  };

  return (
    <div>
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
        <Logo />
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
