import { RegularPostDetail } from 'containers';
import { Heading } from 'components';

const RegularDetail = ({ history, match }) => {
  return (
    <main>
      <Heading content="REVIEWS" />
      <RegularPostDetail history={history} match={match} />
    </main>
  );
};

export default RegularDetail;
