import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as LogoBlack } from './assets/LogoBlack.svg';
import { ReactComponent as LogoWhite } from './assets/LogoWhite.svg';
import { string } from 'prop-types';

const Logo = ({ mode = 'black', title }) => {
  // const signedIn = useSelector(state => state.auth.signedIn)
  const signedIn = true;

  const explanation = title || '산타 어플리케이션';

  return (
    <h1>
      <Link to={signedIn ? '/main' : '/'}>
        {mode === 'white' ? (
          <LogoWhite title={explanation} />
        ) : (
          <LogoBlack title={explanation} />
        )}
      </Link>
    </h1>
  );
};

export default Logo;

Logo.propTypes = {
  mode: string,
  title: string,
};
