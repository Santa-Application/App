import { Link } from 'react-router-dom';

import { RegularPostList } from 'containers';
import { Heading } from 'components';

const RegularList = () => {
  return (
    <main>
      <Link to="/reveiws">
        <Heading content="REVIEWS" />
      </Link>
      <RegularPostList />
    </main>
  );
};

export default RegularList;
