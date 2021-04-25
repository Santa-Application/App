import { RecruitForm } from 'containers';
import { Heading } from 'components';

const RecruitEdit = ({ history, match }) => {
  return (
    <main>
      <Heading content="RECRUIT" />
      <RecruitForm history={history} match={match} />
    </main>
  );
};

export default RecruitEdit;
