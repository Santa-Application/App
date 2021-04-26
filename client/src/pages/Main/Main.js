import SearchMountain from 'containers/SearchMountain/SearchMountain';
import React from 'react';

const Main = ({ history, match }) => {
  return (
    <main>
      <SearchMountain history={history} match={match} />
    </main>
  );
};

export default Main;
