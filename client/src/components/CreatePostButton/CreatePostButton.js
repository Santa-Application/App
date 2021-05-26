import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { createFormPagePath } from 'utils/path';

import { createButton } from './CreatePostButton.module.scss';

const CreatePostButton = ({ pageInfo }) => {
  const history = useHistory();

  const handleClickCreateButton = useCallback(() => {
    history.push(createFormPagePath(pageInfo, 'create'));
  });

  return (
    <button className={createButton} onClick={handleClickCreateButton}>
      작성하기
    </button>
  );
};

export default CreatePostButton;
