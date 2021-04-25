import { RecruitPostList } from 'containers';
import { Heading } from 'components';

const RecruitList = ({ history, match }) => {
  return (
    <main>
      <Heading content="RECRUIT" />
      <RecruitPostList history={history} match={match} />
    </main>
  );
};

export default RecruitList;
