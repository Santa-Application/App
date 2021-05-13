import { Link } from 'react-router-dom';

import { RegularPostDetail } from 'containers';
import { Heading } from 'components';

const RegularDetail = () => {
  return (
    <main>
      <Link to="/reviews">
        <Heading content="REVIEWS" />
      </Link>
      <RegularPostDetail />
    </main>
  );
};

export default RegularDetail;
