import PropTypes from "prop-types"
import { useState } from 'react';
import { toast } from 'react-toastify';

import {
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from 'components/SearchMovie/SearchMovie.styled';

export const SearchMovieForm = ({ onSearhFormSubmit }) => {
  const [query, setQuery] = useState('');

  const formSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Please enter your search request');
      return;
    }

    onSearhFormSubmit(query);
      setQuery('');
  };

  const changeSearchInput = e => {
    setQuery(e.target.value.toLowerCase());
  };

  return (

    <div
      style={{
        marginTop: '40px',
        justifyContent: 'center',
        margin: '0 auto',
        width: '400px',
        display: 'flex',
        padding: 40,
      }}
    >
      <SearchForm onSubmit={formSubmit}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
          value={query}
          onChange={changeSearchInput}
        />
        <SearchFormBtn type="submit">Search</SearchFormBtn>
      </SearchForm>
    </div>
  );
};

SearchMovieForm.propTypes ={
  onSearhFormSubmit: PropTypes.func.isRequired,
}