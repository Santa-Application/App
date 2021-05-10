import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import { RecruitPostList } from 'containers';
import { Heading } from 'components';

const RecruitList = () => {
  const history = useHistory();
  const match = useRouteMatch();
  
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
