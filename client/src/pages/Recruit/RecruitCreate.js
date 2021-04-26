import { RecruitForm } from 'containers';
import { Heading } from 'components';

const RecruitCreate = ({ history, match }) => {
  return (
    <main>
      <Heading content="RECRUIT" />
      <RecruitForm history={history} match={match} formType="create" />
    </main>
  );
};

export default RecruitCreate;
