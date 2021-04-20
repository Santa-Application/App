import 'styles/pages/page.scss';
import {
  Logo, 
  Button,
  Heading
} from 'components';
import {
  homePage,
  logo,
  headMessage,
  subMessage,
  button
} from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={homePage}>
      <Logo 
        className={logo}
        mode={'white'} 
        title={'산타 앱 로고'} 
        href={'/Homepage'}
      />
      <div className={headMessage}>
        <Heading level={2} content={'오늘 기분타?'} />
        <Heading level={2} content={'그럼 산타!'} />
      </div>
      <Heading className={subMessage} level={3} content={'산타를 이용하려면 로그인해주세요.'} />
      <div className={button}>
        <Button 
          secondary={false} 
          type={'button'} 
          disabled={false} 
          value={'로그인 버튼'}
        >
        로그인
        </Button>
        <Button
          secondary={true}
          type={'button'}
          disabled={false}
          value={'회원가입 버튼'}
        >
        회원가입
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
