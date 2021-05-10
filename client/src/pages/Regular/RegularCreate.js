import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import { RegularPostForm } from 'containers';
import { Heading } from 'components';

const RegularCreate = () => {
  const history = useHistory();
  const match = useRouteMatch();
  
  return (
    <main>
      <Link to="/reviews">
        <Heading content="REVIEWS" />
      </Link>
      <RegularPostForm history={history} match={match} formType="create" />
    </main>
  );
};

export default RegularCreate;
