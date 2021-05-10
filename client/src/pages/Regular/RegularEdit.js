import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import { RegularPostForm } from 'containers';
import { Heading } from 'components';

const RegularEdit = () => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <main>
      <Link to="/reviews">
        <Heading content="REVIEWS" />
      </Link>
      <RegularPostForm history={history} match={match} />
    </main>
  );
};

export default RegularEdit;
