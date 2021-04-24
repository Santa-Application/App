import {
  RegisterForm
} from 'containers';
import {
  Header
} from 'components';
import {
  head,
  registerPage
} from './Register.module.scss';

const Register = () => {
  return (
    <div className={registerPage}>
      <Header />
      <RegisterForm className={head}/>
    </div>
  );
};

export default Register;
