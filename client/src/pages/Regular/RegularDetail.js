import { Link } from 'react-router-dom';

import { RegularPostDetail } from 'containers';
import { Heading } from 'components';

const RegularDetail = ({ history, match }) => {
  return (
    <main>
      <Link to="/reviews">
        <Heading content="REVIEWS" />
      </Link>
      <RegularPostDetail history={history} match={match} />
    </main>
  );
};

export default RegularDetail;
