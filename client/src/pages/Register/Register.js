import { RegisterForm } from 'containers';
import { Heading } from 'components';

const Register = ({ history }) => {
  return (
    <main>
      <Heading content="sign up" />
      <RegisterForm history={history} />
    </main>
  );
};

export default Register;
