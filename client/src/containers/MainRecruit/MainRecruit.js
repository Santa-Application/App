import { Button } from 'components';
import React from 'react';
import {
  recruitContainer,
  recruitWrapper,
  recruitTitle,
  recruitDesc,
  recruitButton,
} from './MainRecruit.module.scss';
import { useHistory } from 'react-router-dom';

const MainRecruit = () => {
  const history = useHistory();

  const handleClickButton = () => {
    history.push('/recruit/create');
  };

  return (
    <section className={recruitContainer}>
      <div className={recruitWrapper}>
        <p className={recruitTitle}>등산 메이트를</p>
        <p className={recruitTitle}>직접 모집해보세요</p>
        <p className={recruitDesc}>
          모집글을 작성하고 함께 등산할 친구를 찾아보세요.
        </p>
        <div className={recruitButton}>
          <Button
            onClick={handleClickButton}
            secondary={true}
            type="button"
            children="모집글 작성하기"
          />
        </div>
      </div>
    </section>
  );
};

export default MainRecruit;
