import { Link } from 'react-router-dom';

import { RecruitForm } from 'containers';
import { Heading } from 'components';

const RecruitEdit = ({ history, match }) => {
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
