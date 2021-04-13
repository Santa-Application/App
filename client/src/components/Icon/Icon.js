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

const Icon = ({ shape, ...restProps }) => {

  let RenderIcon = '';
  switch (shape) {
  default:
  case 'calendar': RenderIcon = Calendar; break;
  case 'close': RenderIcon = Close; break;
  case 'edit': RenderIcon = Edit; break;
  case 'female': RenderIcon = Female; break;
  case 'genderBoth': RenderIcon = GenderBoth; break;
  case 'back': RenderIcon = Back; break;
  case 'likeFalse': RenderIcon = LikeFalse; break;
  case 'likeTrue': RenderIcon = LikeTrue; break;
  case 'logout': RenderIcon = Logout; break;
  case 'male': RenderIcon = Male; break;
  case 'member': RenderIcon = Member; break;
  case 'menu': RenderIcon = Menu; break;
  case 'level1': RenderIcon = Level1; break;
  case 'level2': RenderIcon = Level2; break;
  case 'level3': RenderIcon = Level3; break;
  case 'selectClose': RenderIcon = SelectClose; break;
  case 'selectOpen': RenderIcon = SelectOpen; break;
  }

  return <RenderIcon/>; 
};

export default Icon;

Icon.propTypes = {
  shape: oneOf(['calendar', 'close', 'edit', 'female', 'genderBoth', 'back',
    'likeFalse', 'likeTrue', 'logout', 'male', 'member', 'menu', 'level1', 'level2', 'level3',
    'selectClose', 'selectOpen'])
};

Icon.defaultProps = {
  shape: 'level1'
};