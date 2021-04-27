import React from 'react';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import SearchBox from 'components/SearchBox/SearchBox';

const SearchMountain = ({ data, history, match }) => {
  return (
    <>
      <SearchBox mountainData={data} />
    </>
  );
};

export default SearchMountain;
