import FormItem from 'components/FormItem/FormItem';
import { ErrorMessage, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { formHandler, validationSchema } from 'utils/';
import top100Mountains from 'data/top100Mountains';
import { Button, Heading } from 'components';
import {
  container,
  heading,
  formItem,
  buttonContainer,
  cancelButton,
} from './RecruitForm.module.scss';

const RecruitForm = () => {
  const {
    handleSelectDate,
    handleFocusAllInput,
    handleChangeMinInput,
    handleChangeMaxInput,
    handleChangeSlider,
  } = formHandler;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentAge, setCurrentAge] = useState([20, 45]);

  return (
    <div className={container}>
      <Heading content="메이트를 모집하세요~" className={heading} />
      <Formik
        initialValues={{
          mountainName: '',
          recruitingNumber: 1,
          hikingLevel: '',
          recruitingGender: '',
          recruitingAge: [20, 45],
          // description: '',
          // views: 0,
          // recruiterID: '',
          // recruitees: '',
          recruitDate: new Date(),
          title: '',
          // imageURL: {},
        }}
        validationSchema={validationSchema.recruitPost}
        onSubmit={values => {
          console.log(values);
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
                }}
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
                  onFocus: handleFocusAllInput,
                }}
                className={formItem}
              />
              <FormItem
                headingProps={{
                  level: 3,
                  content: '등반 레벨',
                }}
                descProps={{
                  content: '등반 레벨',
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
                />
                <Button type="submit" children="등록하기" />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RecruitForm;
