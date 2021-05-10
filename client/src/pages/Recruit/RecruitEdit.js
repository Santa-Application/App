import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import { RecruitForm } from 'containers';
import { Heading } from 'components';

const RecruitEdit = () => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <main>
      <Link to="/recruit">
        <Heading content="RECRUIT" />
      </Link>
      <RecruitForm history={history} match={match} formType="edit" />
    </main>
  );
};

export default RecruitEdit;
