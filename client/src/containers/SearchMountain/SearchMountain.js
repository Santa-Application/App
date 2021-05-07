import React from 'react';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import SearchBox from 'components/SearchBox/SearchBox';
import { useHistory, useRouteMatch } from 'react-router-dom';

const SearchMountain = ({ data }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <>
      <SearchBox mountainData={data} />
    </>
  );
};

export default SearchMountain;
