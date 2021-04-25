import { RegularPostForm } from 'containers';
import { Heading } from 'components';

const RegularCreate = ({ history, match }) => {
  return (
    <main>
      <Heading content="REVIEWS" />
      <RegularPostForm history={history} match={match} />
    </main>
  );
};

export default RegularCreate;
