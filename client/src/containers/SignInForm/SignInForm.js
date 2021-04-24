import React from 'react';
import { Form, Formik } from 'formik';
import FormItem from 'components/FormItem/FormItem';
import { Button } from 'components';
import { useDispatch } from 'react-redux';
import { signinUserAsync } from 'redux/modules/auth';

const SignInForm = () => {

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {
        console.log(values);
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
        <Button type="button" secondary="true" children="회원가입" />
        <Button type="submit" children="로그인" />
      </Form>
    </Formik>
  );
};

export default SignInForm;
