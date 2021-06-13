import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';

import { FormItem, Button } from 'components';
import { formHandler, validationSchema, pathUtils, formUtils } from 'utils';
import { submitData } from 'utils/handler/formHandler';
import { usePostForm } from 'hooks';

import {
  container,
  heading,
  formItem,
  buttonContainer,
  cancelButton,
} from './RecruitPostForm.module.scss';

const RecruitForm = ({ pageInfo, formType }) => {
  const {
    handleSelectDate,
    handleFocusAllInput,
    handleChangeMinInput,
    handleChangeMaxInput,
    handleChangeSlider,
    handleClickCancelButton,
  } = formHandler;

  const dispatch = useDispatch();
  const history = useHistory();
  const isCreateForm = formType === 'create';
  const mountainsData = useSelector(state => state.mountain.data);

  const [loggedInUserId, postId, prevPost] = usePostForm(
    pageInfo,
    isCreateForm
  );
  const [selectedDate, setSelectedDate] = useState(
    isCreateForm ? new Date() : new Date(prevPost.postDate)
  );
  const [currentAge, setCurrentAge] = useState(
    isCreateForm ? [20, 45] : prevPost.recruitingAge
  );

  return (
    <div className={container}>
      <p className={heading}>메이트를 모집하세요~</p>
      <Formik
        initialValues={formUtils.recruitPostFormInitialValues(
          isCreateForm,
          prevPost
        )}
        validationSchema={validationSchema.recruitPost}
        onSubmit={async values => {
          const newPostId = await submitData(values)(dispatch)(
            isCreateForm,
            pageInfo,
            postId,
            loggedInUserId
          );
          pathUtils.moveToDetailPage(history, pageInfo, newPostId);
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
                  datas: mountainsData,
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
                  content: '같이 등산하고 싶은 메이트의 나이대를 지정해주세요',
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
                  onClick={() => handleClickCancelButton(history, pageInfo)}
                />
                <Button>{isCreateForm ? '등록하기' : '수정하기'}</Button>
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
  formType: 'create',
};

export default RecruitForm;
