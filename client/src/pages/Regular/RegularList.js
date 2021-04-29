import { Link } from 'react-router-dom';

import { RegularPostList } from 'containers';
import { Heading } from 'components';

const RegularList = ({ history, match }) => {
  return (
    <main>
      <Link to="/reveiws">
        <Heading content="REVIEWS" />
      </Link>
      <RegularPostList history={history} match={match} />
    </main>
  );
};

export default RegularList;
