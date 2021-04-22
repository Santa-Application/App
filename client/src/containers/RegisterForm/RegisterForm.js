import {
  Input,
  RadioButton,
  SelectDate,
  FileInput
} from 'components'; 

const RegisterForm = ({ onSubmit }) => {
  return (
    <form 
      onSubmit={onSubmit}
    >
      {/* 닉네임 */}
      <Input 
        id={'registerNickName'} 
        type={'text'} 
        label={'닉네임'}
        labelVisible={true}
        name={'name'}
        // className={'nick'} 
      />
      {/* email */}
      <Input
        id={'registerEmail'}
        type={'email'}
        label={'이메일'}
        labelVisible={true}
        name={'email'}
        // className={}
      />
      {/* password */}
      <Input
        id={'registerPassword'}
        type={'password'}
        label={'비밀번호'}
        labelVisible={true}
        name={'password'}
      />
      {/* password-confirm */}
      <Input
        id={'registerPasswordConfirm'}
        type={'password'}
        label={'비밀번호 확인'}
        labelVisible={true}
        name={'passwordConfirm'}
      />
      {/* gender */}
      <div>
        <RadioButton
          id={'registerFemaleRadioButton'}
          name={'gender'}
          type={'female'}
          value={'여성'}
          checked={false}
          onChange={() => console.log('yee')}
        />
        <RadioButton
          id={'registerMaleRadioButton'}
          name={'gender'}
          type={'male'}
          value={'남성'}
          checked={false}
          onChange={() => console.log('yee')}
        />
      </div>
      {/* date of birth  */}
      {/* <SelectDate
        // className={'notyet'}
        name={'age'}
        selectedDate={new Date()}
        handleDateSelect={() => console.log('hi')}
      /> */}
      {/* level */}
      <div>
        <RadioButton
          id={'registerHikingLevel1RadioButton'}
          name={'hikingLevel'}
          type={'level1'}
          iconSize={0}
        />
        <RadioButton
          id={'registerHikingLevel2RadioButton'}
          name={'hikingLevel'}
          type={'level2'}
          iconSize={0}
        />
        <RadioButton
          id={'registerHikingLevel3RadioButton'}
          name={'hikingLevel'}
          type={'level3'}
          iconSize={0}
        />
      </div>
      {/* image picker */}
      <FileInput 
        id={'registerImageInput'}
        label={'이미지'}
        fileRoute={'route'}
        handleGetFileRoute={null}
        name={'file'}
      />
      {/* text input -> introduction  */}
    </form>
  );
};

export default RegisterForm;
