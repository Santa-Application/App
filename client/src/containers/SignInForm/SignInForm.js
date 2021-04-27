import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { Button, FormItem } from 'components';
import { signinUserAsync } from 'redux/modules/auth';
import { validationSchema } from 'utils';

const SignInForm = ({ history }) => {
  const signedIn = useSelector(state => state.auth.signedIn);
  const dispatch = useDispatch();

  const handleClickRegisterButton = () => {
    history.push('/signup');
  };

  useEffect(() => {
    signedIn && history.push('/main');
  }, [signedIn]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema.signInSchema}
      onSubmit={values => {
        dispatch(signinUserAsync(values));
      }}
    >
      <Form>
        <FormItem
          headingProps={{
            level: 3,
            content: '이메일',
          }}
          descProps={{
            content: '이메일을 입력해주세요.',
          }}
          inputProps={{
            id: 'email',
            formType: 'text',
            type: 'email',
            name: 'email',
          }}
        />
        <FormItem
          headingProps={{
            level: 3,
            content: '비밀번호',
          }}
          descProps={{
            content: '비밀번호을 입력해주세요.',
          }}
          inputProps={{
            id: 'password',
            formType: 'text',
            type: 'password',
            name: 'password',
          }}
        />
        <div className="buttonContainer">
          <Button
            type="button"
            secondary={true}
            children="회원가입"
            onClick={handleClickRegisterButton}
          />
          <Button type="submit" children="로그인" />
        </div>
      </Form>
    </Formik>
  );
};

export default SignInForm;
