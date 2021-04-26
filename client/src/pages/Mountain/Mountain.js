import { Heading } from 'components';
import MountainOverview from 'containers/MountainOverview/MountainOverview';
import React from 'react';

const Mountain = ({ history, match }) => {
  return (
    <main>
      <MountainOverview history={history} match={match} />
    </main>
  );
};

export default Mountain;
