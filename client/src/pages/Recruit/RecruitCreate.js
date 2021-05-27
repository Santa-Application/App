import { Link } from 'react-router-dom';

import { RecruitPostForm } from 'containers';
import { Heading } from 'components';

const RecruitCreate = () => {
  return (
    <main>
      <Link to="/recruit">
        <Heading content="RECRUIT" />
      </Link>
      <RecruitPostForm />
    </main>
  );
};

export default RecruitCreate;
