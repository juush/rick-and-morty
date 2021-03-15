import React, { useState } from 'react';
// import { BASE_URL, PAGE_URL } from '../constants.js';
import { SearchLabel } from '../styled.js';
import CharList from './CharList.js';

function Search(props) {
  const { charList } = props;
  const [search, setSearch] = useState('')

  return (
    <React.Fragment>
      <form className='mt-3'>
        <SearchLabel>
          <span className='my-auto mx-0 text-secondary h5'>Search:</span>
          <input
            className='border border-primary ml-2 text-center'
            id='search'
            onChange={event => {
              setSearch(event.target.value);
            }}

            type='text'
            placeholder='character'
          />
          <input
            className='btn btn-primary ml-1'
            id='submit'
            type='submit'
          />
        </SearchLabel>
      </form>
      <CharList charList={charList} search={search} />
    </React.Fragment>
  );
};

export default Search;
