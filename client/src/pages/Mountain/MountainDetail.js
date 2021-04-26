import { Heading } from 'components';
import MountainOverview from 'containers/MountainOverview/MountainOverview';
import React from 'react';

const MountainDetail = ({ history, match }) => {
  return (
    <main>
      <MountainOverview history={history} match={match} />
    </main>
  );
};

export default MountainDetail;
