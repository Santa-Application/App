import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import MainRecruit from 'containers/MainRecruit/MainRecruit';
import SearchMountain from 'containers/SearchMountain/SearchMountain';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMountainAsync } from 'redux/modules/mountain';
import { mainPage, searchSection, headMessage } from './Main.module.scss';
import { Information } from 'containers';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Error } from 'components';

const Main = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const mountain = useSelector(state => state.mountain);
  const { isLoading, data, error } = mountain;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMountainAsync());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) return <LoadingIcon />;
    if (error) return <Error />;
  }, [isLoading, error]);

  return (
    <main className={mainPage}>
      <section className={searchSection}>
        <SearchMountain history={history} match={match} data={data} />
        <div className={headMessage}>
          <p>오늘 기분타?</p>
          <p>그럼 산타!</p>
        </div>
      </section>
      <MainRecruit history={history} />
      <Information />
    </main>
  );
};

export default Main;
