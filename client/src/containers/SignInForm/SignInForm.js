import React from 'react';
import { Form, Formik } from 'formik';
import FormItem from 'components/FormItem/FormItem';
import { Button } from 'components';
import { useDispatch } from 'react-redux';
import { signinUserAsync } from 'redux/modules/auth';

import { 
  buttons
} from './SignInForm.module.scss';

const SignInForm = () => {

  const dispatch = useDispatch();
  
  const handleRegisterButtonClick = () => {
    window.location.href = '/register';
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
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
        <div className={buttons}>
          <Button type="button" secondary={true} children="회원가입" onClick={handleRegisterButtonClick}/>
          <Button type="submit" children="로그인" />
        </div>
      </Form>
    </Formik>
  );
};

export default SignInForm;
