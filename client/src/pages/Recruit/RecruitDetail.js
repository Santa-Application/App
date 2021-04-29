import { Link } from 'react-router-dom';

import { RecruitPostDetail } from 'containers';
import { Heading } from 'components';

const RecruitDetail = ({ history, match }) => {
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
