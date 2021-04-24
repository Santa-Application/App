import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { FormItem, Button, Heading } from 'components';
// import { validationSchema } from 'utils';
// import { createRegularPostAsync } from 'redux/modules/regularPost';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import {
  container,
  heading,
  formItem,
  buttonContainer,
  cancelButton,
} from './RegularPostForm.module.scss';
import { handleChangeFileInput } from 'utils/handler/formHandler';

<<<<<<< Updated upstream
import top100Mountains from 'data/top100Mountains';

const RegularPostForm = ({ formType, className, ...restProps }) => {
  const dispatch = useDispatch();
=======
const RegularPostForm = ({ className, ...restProps }) => {
  const [formType, setFormType] = useState('create');
  // const dispatch = useDispatch();
>>>>>>> Stashed changes

  return (
    <div className={container}>
      <Heading content="멋진 리뷰를 작성해주세요~" className={heading} />
      <Formik
        initialValues={{
          title: '',
          // mountain: '',
          imageURL: '',
          content: '',
        }}
        // validationSchema={validationSchema.regularPost}
        onSubmit={values => {
          console.log(values);
          // dispatch(createRegularPostAsync(newPost));
        }}
      >
        {({ setFieldValue, handleBlur, handleChange }) => (
          <Form>
            <FormItem
              inputProps={{
                id: 'title',
                name: 'title',
                formType: 'text',
                type: 'text',
              }}
              descProps={{
                content: '매력적인 제목으로 내 리뷰에 이목을 끌어보세요',
              }}
              headingProps={{ level: 3, content: '제목' }}
              className={formItem}
            />
            <FormItem
              inputProps={{
                id: 'mountain',
                name: 'mountain',
                formType: 'select',
                placeholder: '등산한 산을 지정해주세요',
                setFieldValue,
                handleBlur,
                handleChange,
                datas: top100Mountains,
              }}
              descProps={{
                content: '등산한 산을 지정해주세요',
              }}
              headingProps={{ level: 3, content: '등산한 산' }}
              className={formItem}
            />
            <FormItem
              inputProps={{
                id: 'imageURL',
                name: 'imageURL',
                formType: 'file',
                type: 'file',
                label: '파일선택',
                onChange: handleChangeFileInput,
                setFieldValue,
              }}
              descProps={{
                content: '멋진 사진으로 내 리뷰에 이목을 끌어보세요',
              }}
              headingProps={{ level: 3, content: '등산한 산 이미지' }}
              className={formItem}
            />
            <FormItem
              inputProps={{
                id: 'content',
                name: 'content',
                formType: 'textarea',
              }}
              descProps={{
                content: '내가 등반한 산을 자랑해주세요',
              }}
              headingProps={{ level: 3, content: '등산 일정 및 기타 사항' }}
              className={formItem}
            />
            <div className={buttonContainer}>
              <Button secondary type="button" className={cancelButton}>
                취소하기
              </Button>
              <Button>{formType === 'create' ? '등록하기' : '수정하기'}</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegularPostForm;
