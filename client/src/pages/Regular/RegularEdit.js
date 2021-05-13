import { Link } from 'react-router-dom';

import { RegularPostForm } from 'containers';
import { Heading } from 'components';

const RegularEdit = () => {
  return (
    <main>
      <Link to="/reviews">
        <Heading content="REVIEWS" />
      </Link>
      <RegularPostForm formType="edit" />
    </main>
  );
};

export default RegularEdit;
