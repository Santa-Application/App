import { SignInForm } from 'containers';
import { Heading } from 'components';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  
  return (
    <main>
      <Heading content="log in" />
      <SignInForm history={history} />
    </main>
  );
};

export default Login;
