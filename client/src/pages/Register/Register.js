import { RegisterForm } from 'containers';
import { Heading } from 'components';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();

  return (
    <main>
      <Heading content="sign up" />
      <RegisterForm history={history} />
    </main>
  );
};

export default Register;
