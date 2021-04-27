/* eslint-disable indent */
import { useState, useRef } from 'react';
import { Icon } from 'components';
import { arrayOf, object } from 'prop-types';
import {
  container,
  searchInput,
  input,
  closeButton,
  selectCloseButton,
  searchList,
  errorMessage,
} from './SearchBox.module.scss';
import Heading from 'components/Heading/Heading';
import { Link } from 'react-router-dom';
import top100Mountains from 'data/top100Mountains';

const SearchBox = ({ mountainData, ...restProps }) => {
  const [searchText, setSearchText] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const [hasError, setHasError] = useState(false);

  const filtered = mountainData.filter(mountain => {
    return mountain.data.name.includes(searchText);
  });

  const handleFocusInput = e => {
    setIsOpened(true);
    setHasError(false);
    e.target.select();
  };

  const handleChangeInput = e => {
    setSearchText(e.target.value);
    if (filtered.length) setHasError(false);
    setIsOpened(true);
  };

  const searInputRef = useRef();

  const handleClickClose = () => {
    setSearchText('');
    searInputRef.current.focus();
  };

  const handleClickSearch = () => {
    if (!filtered.length) {
      setHasError(true);
      setIsOpened(false);
    }
    if (filtered.length) setIsOpened(true);
  };

  const handleClickItem = e => {
    setSearchText(e.target.textContent);
    setHasError(false);
    setIsOpened(false);
  };

  const handleClickSelectClose = () => {
    setIsOpened(false);
  };

  return (
    <div className={container}>
      <Heading
        className="a11yHidden"
        aria-labelledby="search"
        content="산 검색창"
      />
      <p className="a11yHidden" aria-describedby="search">
        찾고 싶은 산을 검색해주세요.
      </p>
      <div className={searchInput}>
        <input
          id="search"
          type="text"
          name="search"
          value={searchText}
          ref={searInputRef}
          onFocus={handleFocusInput}
          onChange={handleChangeInput}
          placeholder="찾고 싶은 산을 검색해주세요"
          className={input}
          autoComplete="off"
        />
        {searchText ? (
          <button
            className={closeButton}
            type="button"
            onClick={handleClickClose}
          >
            <Icon shape="close" />
          </button>
        ) : isOpened ? (
          <button
            className={selectCloseButton}
            type="button"
            onClick={handleClickSelectClose}
          >
            <Icon shape="selectClose" />
          </button>
        ) : (
          ''
        )}
        <button type="button" onClick={handleClickSearch}>
          <Icon shape="search" />
        </button>
      </div>
      {isOpened && (
        <ul className={searchList} role="listbox" onClick={handleClickItem}>
          {filtered.length === 0
            ? mountainData.map(mountain => {
                return (
                  <li key={mountain.data._id} role="option">
                    <Link to={`/mountain/${mountain.data.name}`}>
                      {mountain.data.name}
                    </Link>
                  </li>
                );
              })
            : filtered.map(mountain => {
                return (
                  <li key={mountain.data._id} role="option">
                    <Link to={`/mountain/${mountain.data.name}`}>
                      {mountain.data.name}
                    </Link>
                  </li>
                );
              })}
        </ul>
      )}
      {hasError && (
        <p className={errorMessage}>
          <span>{searchText}</span>의 검색 결과가 없습니다...
        </p>
      )}
    </div>
  );
};

export default SearchBox;

SearchBox.defaultProps = {
  mountainData: top100Mountains,
};

SearchBox.propTypes = {
  mountainData: arrayOf(object),
};
