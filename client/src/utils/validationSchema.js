import Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      '이메일 형식에 맞지 않습니다.'
    )
    .required('이메일을 필수항목입니다.'),
  password: Yup.string().matches(
    /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
    '비밀번호 형식에 맞지 않습니다.'
  ),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '닉네임은 2자 이상 작성해주세요.')
    .max(10, '닉네임은 15자 이내로 작성해주세요')
    .required('닉네임은 필수항목입니다.'),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      '이메일 형식에 맞지 않습니다.'
    )
    .required('이메일은 필수항목입니다.'),
  password: Yup.string()
    .matches(
      /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
      '비밀번호 형식에 맞지 않습니다. 특수문자, 문자, 숫자를 포함하여 8~15자리 이내로 작성해주세요.'
    )
    .required('비밀번호는 필수항목입니다.'),
  passwordConfirm: Yup.string()
    .matches()
    .required('비밀번호가 일치하지 않습니다.'),
  imageUrl: Yup.string(),
  gender: Yup.string().required('성별은 필수항목입니다.'),
  dateOfBirth: Yup.date().required('생일은 필수항목입니다.'),
  hikingLevel: Yup.string().required('등산 레벨은 필수항목입나다..'),
  introduction: Yup.string().max(50, '자기소개는 50자 이내로 작성해주세요.'),
});

export const regularPost = Yup.object().shape({
  title: Yup.string()
    .max(80, '제목은 80자 이내로 작성해주세요')
    .required('제목은 필수항목입니다.'),
  mountain: Yup.string().matches().required('산은 필수항목입니다.'),
  content: Yup.string()
    .max(300, '리뷰는 300자 이내로 작성해주세요.')
    .required('리뷰는 필수항목입니다.'),
  imageURL: Yup.string().required('이미지는 필수항목입니다.'),
});

export const recruitPost = Yup.object().shape({
  title: Yup.string()
    .max(80, '제목은 80자 이내로 작성해주세요.')
    .required('제목은 필수항목입니다.'),
  mountainName: Yup.string().matches().required('산은 필수항목입니다.'),
  recruitDate: Yup.date().required('날짜는 필수항목입니다.'),
  recruitingLevels: Yup.string().required('등산 레벨은 필수항목입니다.'),
  recruitingSex: Yup.string().required('성별은 필수항목입니다.'),
  recruitingAge: Yup.array().required('나이대는 필수항목입니다.'),
  recruitingNumber: Yup.number()
    .max(3, '코로나가 풀릴때까지 4인체제 유지합시다!')
    .required('메이트 인원 수는 필수항목입니다.'),
  description: Yup.string().max(300, '내용은 300자 이내로 작성해주세요.'),
});
