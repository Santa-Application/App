import FormItem from 'components/FormItem/FormItem';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { formHandler } from 'utils/';
import top100Mountains from 'data/top100Mountains';
import { Button } from 'components';

const RecruitForm = () => {
  const {
    handleSelectDate,
    handleFocusAllInput,
    handleFocusSelectBoxInput,
    handleClickSelectBoxInputButton,
    handleClickSelectBoxListItemButton,
    handleChangeSelectBoxInput,
  } = formHandler;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSelectBoxOpened, setIsSelectBoxOpened] = useState(false);
  const [mountainNameInput, setMountainNameInput] = useState('등산할 산');

  return (
    <Formik
      initialValues={{
        mountainName: '',
        recruitingNumber: 1,
        recruitingLevels: [],
        recruitingSex: '',
        recruitingAge: [],
        description: '',
        views: 0,
        recruiterID: '',
        recruitees: '',
        recruitDate: '',
        title: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
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
            inputValue: mountainNameInput,
            datas: top100Mountains,
            onFocus: e => handleFocusSelectBoxInput(e, setIsSelectBoxOpened),
            onClickInputButton: e =>
              handleClickSelectBoxInputButton(
                e,
                setIsSelectBoxOpened,
                isSelectBoxOpened
              ),
            onClickListButton: e =>
              handleClickSelectBoxListItemButton(
                e,
                setMountainNameInput,
                setIsSelectBoxOpened
              ),
            onChange: e =>
              handleChangeSelectBoxInput(
                e,
                setMountainNameInput,
                setIsSelectBoxOpened
              ),
          }}
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
            onSelect: date => handleSelectDate(date, setSelectedDate),
            onFocus: e => handleFocusAllInput(e),
          }}
        />
        {/* <FormItem
          headingProps={{
            level: 3,
            content: '등산 레벨',
          }}
          descProps={{
            content:
              '같이 등산하고 싶은 메이트의 등산 레벨을 지정해주세요 (중복 가능)',
          }}
          inputProps={{
            formType: '',
            id: '',
            name: '',
          }}
          /> */}
        <FormItem
          headingProps={{
            level: 3,
            content: '등산 메이트 성별',
          }}
          descProps={{
            content: '같이 등산하고 싶은 메이트의 성별을 지정해주세요',
          }}
          inputProps={{
            formType: 'radio',
            id: 'recruitingAge',
            name: 'recruitingAge',
          }}
        />
        {/* <FormItem
          headingProps={{
            level: 3,
            content: '',
          }}
          descProps={{
            content: '',
          }}
          inputProps={{
            formType: '',
            id: '',
            name: '',
          }}
        /> */}
        {/* <FormItem
          headingProps={{
            level: 3,
            content: '',
          }}
          descProps={{
            content: '',
          }}
          inputProps={{
            formType: '',
            id: '',
            name: '',
          }}
        /> */}
        {/* <FormItem
          headingProps={{
            level: 3,
            content: '',
          }}
          descProps={{
            content: '',
          }}
          inputProps={{
            formType: '',
            id: '',
            name: '',
          }}
        /> */}
        {/* <FormItem
          headingProps={{
            level: 3,
            content: '',
          }}
          descProps={{
            content: '',
          }}
          inputProps={{
            formType: '',
            id: '',
            name: '',
          }}
        /> */}
        <Button type="button" secondary="true" children="취소하기" />
        <Button type="submit" children="등록하기" />
      </Form>
    </Formik>
  );
};

export default RecruitForm;
