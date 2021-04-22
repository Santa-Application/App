import FormItem from 'components/FormItem/FormItem';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { formHandler, validationSchema } from 'utils/';
import top100Mountains from 'data/top100Mountains';
import { Button } from 'components';

const RecruitForm = () => {
  const {
    handleSelectDate,
    handleFocusAllInput,
    handleFocusSelectBoxInput,
    handleClickSelectBoxInputButton,
    handleClickSelectBoxListItemButton,
    // handleChangeSelectBoxInput,
    handleBlurSelectBoxInput,
    handleChangeFileInput,
  } = formHandler;

  const [isSelectBoxOpened, setIsSelectBoxOpened] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Formik
      initialValues={{
        mountainName: '',
        recruitingNumber: 1,
        recruitingLevels: [],
        recruitingSex: '',
        recruitingAge: [],
        // numberMin: 20,
        // numberMax: 45,
        // description: '',
        // views: 0,
        // recruiterID: '',
        // recruitees: '',
        recruitDate: {},
        title: '',
        // imageURL: {},
      }}
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
              // className={formItem}
            />
            {/* <FormItem
              headingProps={{
                level: 3,
                content: '등산할 산',
              }}
              descProps={{
                content: '등산할 산을 지정해주세요',
              }}
              inputProps={{
                formType: 'select',
                id: 'mountainName',
                name: 'mountainName',
                isOpened: isSelectBoxOpened,
                setIsOpened: setIsSelectBoxOpened,
                placeholder: '등산할 산',
                datas: top100Mountains,
                onFocus: e =>
                  handleFocusSelectBoxInput(e, setIsSelectBoxOpened),
                // onBlur: handleBlur,
                onClickInputButton: e =>
                  handleClickSelectBoxInputButton(
                    e,
                    setIsSelectBoxOpened,
                    isSelectBoxOpened
                  ),
                onClickListButton: e =>
                  handleClickSelectBoxListItemButton(
                    e,
                    'mountainName',
                    setFieldValue,
                    setIsSelectBoxOpened
                  ),
              }}
            /> */}
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
            />
            <FormItem
              headingProps={{
                level: 3,
                content: '등산 메이트 모집 인원',
              }}
              descProps={{
                content: '같이 등산하고 싶은 메이트의 인원을 지정해주세요',
              }}
              inputProps={{
                formType: 'number',
                id: 'recruitingNumber',
                name: 'recruitingNumber',
                unit: '명',
              }}
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
                name: 'recruitingSex',
              }}
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
                name: 'recruitingLevels',
              }}
            />
            <FormItem
              headingProps={{
                level: 3,
                content: '이메일',
              }}
              descProps={{
                content: '이메일 입력해주세요',
              }}
              inputProps={{
                formType: 'text',
                type: 'email',
                id: 'email',
                name: 'email',
              }}
            />
            <FormItem
              headingProps={{
                level: 3,
                content: '비밀번호',
              }}
              descProps={{
                content: '비밀번호',
              }}
              inputProps={{
                formType: 'text',
                type: 'password',
                id: 'password',
                name: 'password',
              }}
            />
            <FormItem
              headingProps={{
                level: 3,
                content: 'textarea',
              }}
              descProps={{
                content: 'textarea',
              }}
              inputProps={{
                formType: 'textarea',
                id: 'description',
                name: 'description',
              }}
            />
            <Button type="button" secondary children="취소하기" />
            <Button type="submit" children="등록하기" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default RecruitForm;
