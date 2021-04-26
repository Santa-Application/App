import { SignInForm } from 'containers';
import { Heading } from 'components';

const Login = ({ history }) => {
  return (
    <main>
      <Heading content="log in" />
      <SignInForm history={history} />
    </main>
  );
};

export default Login;
