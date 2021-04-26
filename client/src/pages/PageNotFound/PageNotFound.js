import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from 'components';
import { container, background } from './PageNotFound.module.scss';
import { Helmet } from 'react-helmet-async';

export const PageNotFound = () => {
  return (
    <div className={container}>
      <Helmet>
        <title>SANTA: 존재하지 않는 페이지</title>
      </Helmet>
      <div className={background}></div>
      <Heading content="요청하신 페이지가 존재하지 않습니다." />
      <Link to="/main">홈 페이지로 이동하기</Link>
    </div>
  );
};

export default PageNotFound;
