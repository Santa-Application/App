import { oneOf } from 'prop-types';
import { ReactComponent as Calendar } from './assets/calendar.svg';
import { ReactComponent as Close } from './assets/close.svg';
import { ReactComponent as Edit } from './assets/edit.svg';
import { ReactComponent as Female } from './assets/female.svg';
import { ReactComponent as GenderBoth } from './assets/gender-both.svg';
import { ReactComponent as Back } from './assets/goToBack.svg';
import { ReactComponent as LikeFalse } from './assets/like-false.svg';
import { ReactComponent as LikeTrue } from './assets/like-true.svg';
import { ReactComponent as Logout } from './assets/logout.svg';
import { ReactComponent as Male } from './assets/male.svg';
import { ReactComponent as Member } from './assets/member.svg';
import { ReactComponent as Menu } from './assets/menu.svg';
import { ReactComponent as Level1 } from './assets/mountain-level1.svg';
import { ReactComponent as Level2 } from './assets/mountain-level2.svg';
import { ReactComponent as Level3 } from './assets/mountain-level3.svg';
import { ReactComponent as SelectClose } from './assets/select-close.svg';
import { ReactComponent as SelectOpen } from './assets/select-open.svg';
import { ReactComponent as Search } from './assets/search.svg';
import { ReactComponent as Seoul } from './assets/seoul.svg';
import { ReactComponent as Gyeongsang } from './assets/gyeongsang.svg';
import { ReactComponent as Chungcheong } from './assets/chungcheong.svg';
import { ReactComponent as Jeju } from './assets/jeju.svg';
import { ReactComponent as Jeolla } from './assets/jeolla.svg';
import { ReactComponent as Gangwon } from './assets/gangwon.svg';
import { ReactComponent as NavMountains } from './assets/mountains_nav.svg';
import { ReactComponent as NavProfile } from './assets/profile_nav.svg';
import { ReactComponent as NavRecruits } from './assets/recruitposts_nav.svg';
import { ReactComponent as NavReviews } from './assets/reviewposts_nav.svg';

const Icon = ({ shape, ...restProps }) => {
  let RenderIcon = '';
  switch (shape) {
    default:
    case 'calendar':
      RenderIcon = Calendar;
      break;
    case 'close':
      RenderIcon = Close;
      break;
    case 'edit':
      RenderIcon = Edit;
      break;
    case 'female':
      RenderIcon = Female;
      break;
    case 'genderBoth':
      RenderIcon = GenderBoth;
      break;
    case 'back':
      RenderIcon = Back;
      break;
    case 'likeFalse':
      RenderIcon = LikeFalse;
      break;
    case 'likeTrue':
      RenderIcon = LikeTrue;
      break;
    case 'logout':
      RenderIcon = Logout;
      break;
    case 'male':
      RenderIcon = Male;
      break;
    case 'member':
      RenderIcon = Member;
      break;
    case 'menu':
      RenderIcon = Menu;
      break;
    case 'level1':
      RenderIcon = Level1;
      break;
    case 'level2':
      RenderIcon = Level2;
      break;
    case 'level3':
      RenderIcon = Level3;
      break;
    case 'selectClose':
      RenderIcon = SelectClose;
      break;
    case 'selectOpen':
      RenderIcon = SelectOpen;
      break;
    case 'search':
      RenderIcon = Search;
      break;
    case 'seoul':
      RenderIcon = Seoul;
      break;
    case 'gangwon':
      RenderIcon = Gangwon;
      break;
    case 'jeolla':
      RenderIcon = Jeolla;
      break;
    case 'jeju':
      RenderIcon = Jeju;
      break;
    case 'chungcheong':
      RenderIcon = Chungcheong;
      break;
    case 'gyeongsang':
      RenderIcon = Gyeongsang;
      break;
    case 'navMountains':
      RenderIcon = NavMountains;
      break;
    case 'navProfile':
      RenderIcon = NavProfile;
      break;
    case 'navRecruits':
      RenderIcon = NavRecruits;
      break;
    case 'navReviews':
      RenderIcon = NavReviews;
      break;
  }

  return <RenderIcon {...restProps} />;
};

Icon.propTypes = {
  shape: oneOf([
    'calendar',
    'close',
    'edit',
    'female',
    'genderBoth',
    'back',
    'likeFalse',
    'likeTrue',
    'logout',
    'male',
    'member',
    'menu',
    'level1',
    'level2',
    'level3',
    'selectClose',
    'selectOpen',
    'search',
    'seoul',
    'gangwon',
    'chungcheong',
    'jeolla',
    'gyeongsang',
    'jeju',
    'navMountains',
    'navProfile',
    'navRecruits',
    'navReviews'
  ]),
};

Icon.defaultProps = {
  shape: 'level1',
};

export default Icon;
