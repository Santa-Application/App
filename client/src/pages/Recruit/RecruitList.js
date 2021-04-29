import { Link } from 'react-router-dom';

import { RecruitPostList } from 'containers';
import { Heading } from 'components';

const RecruitList = ({ history, match }) => {
  return (
    <main>
      <Link to="/recruit">
        <Heading content="RECRUIT" />
      </Link>
      <RecruitPostList history={history} match={match} />
    </main>
  );
};

export default RecruitList;
