/* eslint-disable indent */
import FormItem from 'components/FormItem/FormItem';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import { formHandler, postDate, validationSchema, path } from 'utils/';
import top100Mountains from 'data/top100Mountains';
import { Button } from 'components';
import {
  container,
  heading,
  formItem,
  buttonContainer,
  cancelButton,
} from './RecruitForm.module.scss';
import {
  createRecruitPostAsync,
  getRecruitPostsAsync,
  updateRecruitPostAsync,
} from 'redux/modules/recruitPost';

const RecruitForm = ({ pageInfo, formType }) => {
  const {
    handleSelectDate,
    handleFocusAllInput,
    handleChangeMinInput,
    handleChangeMaxInput,
    handleChangeSlider,
  } = formHandler;

  const userId = useSelector(state => state.auth.userInfo._id);
  const history = useHistory();
  const params = useParams();
  const postId = params.postId;
  const dispatch = useDispatch();

  const recruitPost = useSelector(state => state.recruitPost);
  const { data } = recruitPost;
  const postData = data.find(_data => _data.recruitPost._id === postId);
  const prevPost = postData?.recruitPost;

  const selectedDateInitial = postId ? new Date() : new Date();
  const ageInitial = postId ? prevPost.recruitingAge : [20, 45];

  const [selectedDate, setSelectedDate] = useState(selectedDateInitial);
  const [currentAge, setCurrentAge] = useState(ageInitial);

  const handleClickCancelButton = () => {
    history.push(path.createListPagePath(pageInfo));
  };
  return (
    <div className={container}>
      <p className={heading}>메이트를 모집하세요~</p>
      <Formik
        initialValues={{
          mountainName: postId ? prevPost.mountainName : '',
          recruitingNumber: postId ? prevPost.recruitingNumber : 1,
          hikingLevel: postId ? prevPost.hikingLevel : '',
          recruitingGender: postId ? prevPost.recruitingGender : '',
          recruitingAge: postId ? prevPost.recruitingAge : [20, 45],
          description: postId ? prevPost.description : '',
          recruitDate: postId ? prevPost.recruitDate : new Date(),
          title: postId ? prevPost.title : '',
          imageURL: postId ? prevPost.imageURL : {},
        }}
        validationSchema={validationSchema.recruitPost}
        onSubmit={async values => {
          const newPost = {
            ...values,
            publisherID: userId,
            postdate: new Date(),
          };

          const updatePost = {
            ...values,
          };

          const newPostData = postId
            ? await dispatch(updateRecruitPostAsync(postId, updatePost))
            : await dispatch(createRecruitPostAsync(newPost));
          await dispatch(getRecruitPostsAsync());

          const newPostId = newPostData.recruitPost._id;

          history.push(path.createDetailPagePath(pageInfo, newPostId));
        }}
      >
        {({ setFieldValue, handleBlur, handleChange }) => {
          return (
            <Form>
              <FormItem
                headingProps={{
                  level: 3,
                  content: '제목',
                }}
                descProps={{
                  content: '매력적인 제목으로 메이트에게 어필해보세요',
                }}
                inputProps={{
                  formType: 'text',
                  type: 'text',
                  id: 'title',
                  name: 'title',
                  onFocus: handleFocusAllInput,
                }}
                className={formItem}
              />
              <FormItem
                headingProps={{ level: 3, content: '등산할 산' }}
                descProps={{
                  content: '등산할 산을 지정해주세요',
                }}
                inputProps={{
                  id: 'mountainName',
                  name: 'mountainName',
                  formType: 'select',
                  placeholder: '등산할 산을 지정해주세요',
                  setFieldValue,
                  handleBlur,
                  handleChange,
                  datas: top100Mountains,
                }}
                className={formItem}
              />
              <FormItem
                headingProps={{
                  level: 3,
                  content: '등산 날짜',
                }}
                descProps={{
                  content: '등산하고 싶은 날짜를 선택해 주세요',
                }}
                inputProps={{
                  formType: 'date',
                  id: 'recruitDate',
                  name: 'recruitDate',
                  selectedDate: selectedDate,
                  setSelectedDate: setSelectedDate,
                  setFieldValue,
                  onSelect: handleSelectDate,
                  // onFocus: handleFocusAllInput,
                }}
                className={formItem}
              />
              <FormItem
                headingProps={{
                  level: 3,
                  content: '등산 레벨',
                }}
                descProps={{
                  content:
                    '같이 등산하고 싶은 메이트의 등산 레벨을 지정해주세요',
                }}
                inputProps={{
                  formType: 'hikingLevel',
                  name: 'hikingLevel',
                }}
                className={formItem}
              />
              <FormItem
                headingProps={{
                  level: 3,
                  content: '등산 메이트 나이대',
                }}
                descProps={{
                  content: '같이 등산할 메이트의 나이대를 정해주세요',
                }}
                inputProps={{
                  formType: 'rangeSlider',
                  id: 'recruitingAge',
                  name: 'recruitingAge',
                  minInputName: 'numberMin',
                  maxInputName: 'numberMax',
                  unit: '세',
                  setFieldValue,
                  currentAge,
                  setCurrentAge,
                  handleChange,
                  onChangeMinInput: handleChangeMinInput,
                  onChangeMaxInput: handleChangeMaxInput,
                  onChangeSlider: handleChangeSlider,
                  onFocus: handleFocusAllInput,
                }}
                className={formItem}
              />
              <FormItem
                headingProps={{
                  level: 3,
                  content: '등산 메이트 성별',
                }}
                descProps={{
                  content: '같이 등산하고 싶은 메이트의 성별을 지정해주세요',
                }}
                inputProps={{
                  formType: 'gender',
                  name: 'recruitingGender',
                }}
                className={formItem}
              />
              <FormItem
                headingProps={{
                  level: 3,
                  content: '등산 메이트 모집 인원',
                }}
                descProps={{
                  content:
                    '같이 등산하고 싶은 메이트의 인원을 지정해주세요 (본인을 제외한 인원수를 지정해주세요)',
                }}
                inputProps={{
                  formType: 'number',
                  id: 'recruitingNumber',
                  name: 'recruitingNumber',
                  unit: '명',
                }}
                className={formItem}
              />
              <FormItem
                headingProps={{
                  level: 3,
                  content: '등산 일정 및 기타 사항',
                }}
                descProps={{
                  content:
                    '자세한 등산 일정 및 준비물 등 세부사항을 작성해주세요',
                }}
                inputProps={{
                  formType: 'textarea',
                  id: 'description',
                  name: 'description',
                }}
                className={formItem}
              />
              <div className={buttonContainer}>
                <Button
                  type="button"
                  secondary
                  children="취소하기"
                  className={cancelButton}
                  onClick={handleClickCancelButton}
                />
                <Button>{postId ? '수정하기' : '등록하기'}</Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

RecruitForm.defaultProps = {
  pageInfo: {
    postType: 'recruit',
  },
};

export default RecruitForm;
