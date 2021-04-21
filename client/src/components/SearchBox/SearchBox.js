import { useState } from 'react';
import { Input, Icon } from 'components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container, input, button } from './SearchBox.module.scss';

const SearchBox = ({ ...restProps }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchValue = e => {
    setSearchText(e.target.value);
  };
  const handleSearchMountain = e => {
    console.log('clicked!');
  };

  return (
    <div className={container}>
      <Input
        id="search"
        type="text"
        label="칮고 싶은 산을 검색해주세요"
        labelVisible={false}
        name="search"
        value={searchText}
        onChange={handleSearchValue}
        placeholder="찾고 싶은 산을 검색해주세요"
        className={input}
      />
      <button type="button" onClick={handleSearchMountain} className={button}>
        <Icon shape="search" />
      </button>
    </div>
  );
};

export default SearchBox;
