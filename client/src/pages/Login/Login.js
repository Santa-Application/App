import {
  SignInForm
} from 'containers';
import {
  Heading
} from 'components';
import {
  heading,
  signInForm,
  buttons
} from './Login.module.scss';
import classNames from 'classnames';

const Login = () => {

  const classes = classNames(heading, signInForm, buttons);

  return (
    <div className={classes}>
      <Heading
        level={2}
        content={'sign in'}
      />
      <SignInForm />
    </div>
  );
};

export default Login;
