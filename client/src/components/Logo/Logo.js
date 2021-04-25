import { ReactComponent as LogoBlack } from './assets/LogoBlack.svg';
import { ReactComponent as LogoWhite } from './assets/LogoWhite.svg';
import { string } from 'prop-types';

const Logo = ({ mode = 'black', title, href = '/', className }) => {
  
  const explanation = title || '산타 어플리케이션';

  return (
    <h1 className={className}>
      <a href={href}>
        {
          mode === 'white' ? 
            <LogoWhite title={explanation}/> : 
            <LogoBlack title={explanation} />
        }
      </a>
    </h1>
  );
};

export default Logo;

Logo.propTypes = {
  mode: string,
  title: string,
  href: string
};