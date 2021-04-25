import { RecruitPostDetail } from 'containers';
import { Heading } from 'components';

const RecruitDetail = ({ history, match }) => {
  return (
    <main>
      <Heading content="RECRUIT" />
      <RecruitPostDetail history={history} match={match} />
    </main>
  );
};

export default RecruitDetail;
