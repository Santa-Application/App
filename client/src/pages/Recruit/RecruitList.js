import { Link } from 'react-router-dom';

import { RecruitPostList } from 'containers';
import { Heading } from 'components';

const RecruitList = () => {
  return (
    <main>
      <Link to="/recruit">
        <Heading content="RECRUIT" />
      </Link>
      <RecruitPostList />
    </main>
  );
};

export default RecruitList;
