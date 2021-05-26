/* eslint-disable indent */
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { FormItem, Button } from 'components';
import { validationSchema, path } from 'utils';
import {
  createRegularPostAsync,
  getRegularPostsAsync,
} from 'redux/modules/regularPost';
import {
  handleChangeFileInput,
  handleClickCancelButton,
} from 'utils/handler/formHandler';

import PropTypes from 'prop-types';
import {
  container,
  heading,
  formItem,
  buttonContainer,
  cancelButton,
} from './RegularPostForm.module.scss';

import top100Mountains from 'data/top100Mountains';

const RegularPostForm = ({ pageInfo, formType }) => {
  const history = useHistory();

  const userId = useSelector(state => state.auth.userInfo._id);
  const dispatch = useDispatch();

  return (
    <div className={container}>
      <p className={heading}>멋진 리뷰를 작성해주세요~</p>
      <Formik
        initialValues={{
          title: '',
          mountainName: '',
          imageURL: '',
          content: '',
        }}
        validationSchema={validationSchema.regularPost}
        onSubmit={async values => {
          const formData = new FormData();
          const newPostObj = {
            ...values,
            publisherID: userId,
            postdate: new Date(),
          };

          Object.keys(newPostObj).forEach(key => {
            formData.append(key, newPostObj[key]);
          });

          const newPostData = await dispatch(createRegularPostAsync(formData));
          dispatch(getRegularPostsAsync());

          const newPostId = newPostData.regularPost._id;

          history.push(path.createDetailPagePath(pageInfo, newPostId));
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
              headingProps={{ level: 3, content: '등산한 산' }}
              descProps={{
                content: '등산한 산을 지정해주세요',
              }}
              inputProps={{
                id: 'mountainName',
                name: 'mountainName',
                formType: 'select',
                placeholder: '등산한 산을 지정해주세요',
                setFieldValue,
                handleBlur,
                handleChange,
                datas: top100Mountains,
              }}
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
              headingProps={{ level: 3, content: '리뷰 상세 글' }}
              className={formItem}
            />
            <div className={buttonContainer}>
              <Button
                secondary
                type="button"
                className={cancelButton}
                onClick={() => handleClickCancelButton(history, pageInfo)}
              >
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

RegularPostForm.defaultProps = {
  pageInfo: {
    postType: 'reviews',
  },
  formType: 'create',
};

RegularPostForm.propTypes = {
  pageInfo: PropTypes.object,
  formType: PropTypes.string,
};

export default RegularPostForm;
