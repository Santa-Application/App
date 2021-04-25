import { RegularPostList } from 'containers';
import { Heading } from 'components';

const RegularList = ({ history, match }) => {
  return (
    <main>
      <Heading content="REVIEWS" />
      <RegularPostList history={history} match={match} />
    </main>
  );
};

export default RegularList;
