import { Link } from 'react-router-dom';

import { RegularPostForm } from 'containers';
import { Heading } from 'components';

const RegularEdit = ({ history, match }) => {
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
