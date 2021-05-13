import { Link } from 'react-router-dom';

import { RecruitPostDetail } from 'containers';
import { Heading } from 'components';

const RecruitDetail = () => {
  return (
    <main>
      <Link to="/recruit">
        <Heading content="RECRUIT" />
      </Link>
      <RecruitPostDetail />
    </main>
  );
};

export default RecruitDetail;
