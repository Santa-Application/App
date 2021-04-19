import { ReactComponent as LogoBlack } from './assets/LogoBlack.svg';
import { ReactComponent as LogoWhite } from './assets/LogoWhite.svg';
import { string } from 'prop-types';


const Logo = ({ style = 'black', title }) => {

  const explanation = title || '산타 어플리케이션';

  return (
    <h1>
      {
        style === 'white' ? <LogoWhite title={explanation}/> : <LogoBlack title={explanation} />
      }
    </h1>
  );
};

export default Logo;

Logo.propTypes = {
  style: string,
  title: string
};