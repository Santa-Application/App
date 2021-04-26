import SearchBox from 'components/SearchBox/SearchBox';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMountainAsync } from 'redux/modules/mountain';
// import { searchBoxContainer } from './SearchMoutain.module.scss';

const SearchMountain = ({ history, match }) => {
  const mountain = useSelector(state => state.mountain);
  const { isLoading, data, error } = mountain;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMountainAsync());
  }, [dispatch]);

  if (isLoading)
    return (
      <div
        style={{
          color: '#666',
          fontSize: '2rem',
          margin: '5rem',
          marginBottom: '25rem',
        }}
      >
        로딩중임돠
      </div>
    );
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
    <>
      <SearchBox datas={data} />
    </>
  );
};

export default SearchMountain;
