import { ReactComponent as LogoBlack } from './assets/LogoBlack.svg';
import { ReactComponent as LogoWhite } from './assets/LogoWhite.svg';
import { string } from 'prop-types';


const Logo = ({ style = 'black', title, href }) => {

  const explanation = title || '산타 어플리케이션';

  return (
    <h1>
      <a href={href}>
        {
          style === 'white' ? <LogoWhite title={explanation}/> : <LogoBlack title={explanation} />
        }
      </a>
    </h1>
  );
};

export default Logo;

Logo.propTypes = {
  style: string,
  title: string,
  href: string
};