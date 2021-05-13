import { Link } from 'react-router-dom';

import { RecruitForm } from 'containers';
import { Heading } from 'components';

const RecruitEdit = () => {
  return (
    <main>
      <Link to="/recruit">
        <Heading content="RECRUIT" />
      </Link>
      <RecruitForm formType="edit" />
    </main>
  );
};

export default RecruitEdit;
