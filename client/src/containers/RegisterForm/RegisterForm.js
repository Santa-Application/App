import { useState } from 'react';
import { formHandler, validationSchema } from 'utils/';
import { Formik, Form } from 'formik';
import { FormItem, Button, Heading } from 'components';
import { useDispatch } from 'react-redux';
import { registerNewUserAsync } from 'redux/modules/auth';
import { handleFocusAllInput } from 'utils/handler/formHandler';
import { useHistory } from 'react-router-dom';

const RegisterForm = ({ className }) => {
  const history = useHistory();
  const { handleSelectDate, handleFocusAllInput } = formHandler;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  const handleClickCancel = () => {
    history.push('/');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        imageURL: null,
        gender: '',
        dateOfBirth: '',
        hikingLevel: '',
        introduction: '',
      }}
      validationSchema={validationSchema.registerSchema}
      onSubmit={values => {
        dispatch(registerNewUserAsync(values));
        history.push('/main');
      }}
    >
      {({ setFieldValue, handleBlur, handleChange, errors }) => {
        return (
          <Form>
            <FormItem
              inputProps={{
                id: 'name',
                name: 'name',
                formType: 'text',
                type: 'text',
              }}
              descProps={{
                content: '닉네임을 적어주세요',
              }}
              headingProps={{ level: 3, content: '닉네임' }}
            />
            <FormItem
              inputProps={{
                id: 'email',
                name: 'email',
                formType: 'text',
                type: 'email',
              }}
              descProps={{
                content: '로그인용 이메일을 적어주세요',
              }}
              headingProps={{ level: 3, content: '이메일' }}
            />
            <FormItem
              inputProps={{
                id: 'password',
                name: 'password',
                formType: 'text',
                type: 'password',
              }}
              descProps={{
                content: '비밀번호를 작성해주세요',
              }}
              headingProps={{ level: 3, content: '비밀번호' }}
            />
            <FormItem
              inputProps={{
                id: 'passwordConfirm',
                name: 'passwordConfirm',
                formType: 'text',
                type: 'password',
              }}
              descProps={{
                content: '비밀번호를 재차 확인합니다.',
              }}
              headingProps={{ level: 3, content: '비밀번호 확인' }}
            />
            <FormItem
              inputProps={{
                name: 'gender',
                formType: 'gender',
              }}
              descProps={{
                content: '성별을 입력해주세요.',
              }}
              headingProps={{ level: 3, content: '성별' }}
            />
            <FormItem
              inputProps={{
                id: 'dateOfBirth',
                name: 'dateOfBirth',
                formType: 'date',
                onSelect: handleSelectDate,
                selectedDate: selectedDate,
                setSelectedDate: setSelectedDate,
                onFocus: handleFocusAllInput,
                setFieldValue,
              }}
              descProps={{
                content: '생일을 입력해주세요.',
              }}
              headingProps={{ level: 3, content: '생년월일' }}
            />
            <FormItem
              inputProps={{
                id: 'hikingLevel',
                name: 'hikingLevel',
                formType: 'hikingLevel',
              }}
              descProps={{
                content: '나는 등산 이만큼 한다!',
              }}
              headingProps={{ level: 3, content: '등산 레벨' }}
            />
            <FormItem
              inputProps={{
                id: 'imageURL',
                name: 'imageURL',
                formType: 'file',
                label: '파일 선택',
              }}
              descProps={{
                content: '본인 프로필에 쓰일 이미지를 업로드해주세요.',
              }}
              headingProps={{ level: 3, content: '이미지' }}
            />
            <FormItem
              inputProps={{
                id: 'introduction',
                name: 'introduction',
                formType: 'textarea',
              }}
              descProps={{
                content: '본인에 대한 멋진 소개를 작성해주세요:)',
              }}
              headingProps={{
                level: 3,
                content: '자기 소개',
              }}
            />
            <div className="buttonContainer">
              <Button
                type="button"
                secondary
                children="취소하기"
                onClick={handleClickCancel}
              />
              <Button type="submit" children="가입하기" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
