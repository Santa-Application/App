import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from 'components';
import { container, background } from './ComingSoonPage.module.scss';
import { Helmet } from 'react-helmet-async';

export const ComingSoonPage = () => {
  return (
    <div className={container}>
      <Helmet>
        <title>SANTA: 준비중인 페이지</title>
      </Helmet>
      <div className={background}></div>
      <Heading content="요청하신 페이지는 준비중입니다." />
      <Link to="/main">홈 페이지로 이동하기</Link>
    </div>
  );
};

export default ComingSoonPage;
