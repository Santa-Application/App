import {
  card
} from './MountainCard.module.scss';
import { Link } from 'react-router-dom';

const MountainCard = ({ mountainName, to, background }) => {
  return (
    <Link
      to={to}
    >
      <div
        className={card}
        style={{
          backgroundImage: `url(${background})`,
          backgroundPositionX: 'center',
          backgroundPositionY: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {mountainName}
      </div>
    </Link>
  );
};

export default MountainCard;
