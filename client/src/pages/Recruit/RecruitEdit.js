import { Link } from 'react-router-dom';

import { RecruitPostForm } from 'containers';
import { Heading } from 'components';

const RecruitEdit = () => {
  return (
    <main>
      <Link to="/recruit">
        <Heading content="RECRUIT" />
      </Link>
      <RecruitPostForm formType="edit" />
    </main>
  );
};

export default RecruitEdit;
