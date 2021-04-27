import MainRecruit from 'containers/MainRecruit/MainRecruit';
import SearchMountain from 'containers/SearchMountain/SearchMountain';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMountainAsync } from 'redux/modules/mountain';
import {
  mainPage,
  searchSection,
  searchContainer,
  headMessage,
} from './Main.module.scss';

const Main = ({ history, match }) => {
  const mountain = useSelector(state => state.mountain);
  const { isLoading, data, error } = mountain;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMountainAsync());
  }, []);

  return (
    <main className={mainPage}>
      <div className={searchSection}>
        <SearchMountain
          history={history}
          match={match}
          isLoading={isLoading}
          data={data}
          error={error}
        />
        <div className={headMessage}>
          <p>오늘 기분타?</p>
          <p>그럼 산타!</p>
        </div>
      </div>
      <MainRecruit />
    </main>
  );
};

export default Main;
