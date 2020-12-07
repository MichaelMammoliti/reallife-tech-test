import React from 'react';

import { Button, Row, Column, Input, Select } from '@components';

import styles from './search-bar.scss';

const options = [
  {
    value: '',
    text: 'select one',
  },
  {
    value: 'star',
    text: 'star',
  },
  {
    value: 'title',
    text: 'title',
  },
];

const SearchBar = ({ onSelectChange, onInputChange, onSubmit }) => (
  <div className={styles['search-bar']}>
    <form>
      <Row alignItems="center" spacing="s">
        <Column grow>
          <Input type="text" name="searchValue" placeholder="Search..." onChange={onInputChange} />
        </Column>
        <Column shrink>
          <Select
            options={options}
            name="searchType"
            placeholder="Search..."
            onChange={onSelectChange}
          />
        </Column>
        <Column shrink>
          <Button onClick={onSubmit}>Search</Button>
        </Column>
      </Row>
    </form>
  </div>
);

export default SearchBar;
