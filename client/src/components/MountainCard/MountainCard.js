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
        style={background ? 
          { backgroundImage: `url(${background})` } : {}
        }
      >
        {mountainName}
      </div>
    </Link>
  );
};

export default MountainCard;
