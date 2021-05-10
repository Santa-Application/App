import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import { RegularPostDetail } from 'containers';
import { Heading } from 'components';

const RegularDetail = () => {
  const history = useHistory();
  const match = useRouteMatch();

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
