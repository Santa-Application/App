import SearchMountain from 'containers/SearchMountain/SearchMountain';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMountainAsync } from 'redux/modules/mountain';

const Main = ({ history, match }) => {
  const mountain = useSelector(state => state.mountain);
  const { isLoading, data, error } = mountain;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMountainAsync());
  }, [dispatch]);
  return (
    <main>
      <SearchMountain
        history={history}
        match={match}
        isLoading={isLoading}
        data={data}
        error={error}
      />
    </main>
  );
};

export default Main;
