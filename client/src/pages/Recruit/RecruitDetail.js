import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import { RecruitPostDetail } from 'containers';
import { Heading } from 'components';

const RecruitDetail = () => {
  const history = useHistory();
  const match = useRouteMatch();
  
  return (
    <main>
      <Link to="/recruit">
        <Heading content="RECRUIT" />
      </Link>
      <RecruitPostDetail history={history} match={match} />
    </main>
  );
};

export default RecruitDetail;
