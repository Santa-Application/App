import { RegularPostForm } from 'containers';
import { Heading } from 'components';

const RegularCreate = ({ history, match }) => {
  return (
    <main>
      <Heading content="REVIEWS" />
      <RegularPostForm history={history} match={match} formType="create" />
    </main>
  );
};

export default RegularCreate;
