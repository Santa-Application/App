import { Link } from 'react-router-dom';

import { RegularPostForm } from 'containers';
import { Heading } from 'components';

const RegularCreate = ({ history, match }) => {
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
