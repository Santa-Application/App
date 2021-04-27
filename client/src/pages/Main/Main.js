<<<<<<< HEAD
// import MainRecruit from 'containers/MainRecruit/MainRecruit';
=======
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import MainRecruit from 'containers/MainRecruit/MainRecruit';
>>>>>>> f08dda5e3e201748172d9783eb9579ca1ba77eb8
import SearchMountain from 'containers/SearchMountain/SearchMountain';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMountainAsync } from 'redux/modules/mountain';
import { mainPage, searchSection, headMessage } from './Main.module.scss';

const Main = ({ history, match }) => {
  const mountain = useSelector(state => state.mountain);
  const { isLoading, data, error } = mountain;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMountainAsync());
  }, []);

  if (isLoading) return <LoadingIcon />;
  if (error)
    return (
      <div
        style={{
          color: '#666',
          fontSize: '2rem',
          margin: '5rem',
          marginBottom: '25rem',
        }}
      >
        에러났음돠
      </div>
    );
  if (!data)
    return (
      <div
        style={{
          color: '#666',
          fontSize: '2rem',
          margin: '5rem',
          marginBottom: '25rem',
        }}
      >
        데이터가 없음돠
      </div>
    );

  return (
    <main className={mainPage}>
      <section className={searchSection}>
        <SearchMountain history={history} match={match} data={data} />
        <div className={headMessage}>
          <p>오늘 기분타?</p>
          <p>그럼 산타!</p>
        </div>
<<<<<<< HEAD
      </div>
      {/* <MainRecruit /> */}
=======
      </section>
      <MainRecruit history={history} />
>>>>>>> f08dda5e3e201748172d9783eb9579ca1ba77eb8
    </main>
  );
};

export default Main;
