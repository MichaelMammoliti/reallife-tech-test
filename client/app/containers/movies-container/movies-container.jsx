import React, { useEffect, useState } from 'react';
import { MovieList, Section, SearchBar } from '@components';

import styles from './movies-container.scss';

const MoviesContainer = () => {
  const [state, setState] = useState({
    searchType: 'star',
  });

  const fetchMoviesPending = () => {
    setState({
      ...state,
      requestStatus: 'pending',
    });
  };

  const fetchMoviesSuccess = (movies) => {
    setState({
      ...state,
      requestStatus: 'success',
      movies,
    });
  };

  const fetchMoviesRejected = () => {
    setState({
      ...state,
      requestStatus: 'rejected',
    });
  };

  const fetchMovies = async () => {
    fetchMoviesPending();

    const movies = await fetch('api/movies');

    if (movies) {
      fetchMoviesSuccess(movies);
    } else {
      fetchMoviesRejected();
    }
  };

  const searchMoviesPending = () => {
    setState({
      ...state,
      requestStatus: 'pending',
    });
  };

  const searchMoviesSuccess = (movies) => {
    setState({
      ...state,
      requestStatus: 'success',
      movies,
    });
  };
  const searchMoviesRejected = () => {
    setState({
      ...state,
      requestStatus: 'rejected',
    });
  };

  const searchMovies = async () => {
    searchMoviesPending();

    const movies = await fetch('api/movies/search', {
      method: 'GET',
      query: {
        [state.searchType]: state.searchValue,
      },
    });

    if (movies) {
      searchMoviesSuccess(movies);
    } else {
      searchMoviesRejected();
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearchBarSubmit = () => {
    searchMovies();
  };

  const handleSearchBarChange = ({ name, value }) => {
    const newState = {};

    if (value) {
      newState[name] = value;
    }

    setState({
      ...state,
      ...newState,
    });
  };

  const handleResetFilters = () => {

  };

  const { movies, requestStatus } = state;

  return (
    <div className={styles['movies-container']}>
      <Section title="Your Movies">
        <div className={styles['movies-container__item']}>
          <SearchBar
            onSelectChange={handleSearchBarChange}
            onInputChange={handleSearchBarChange}
            onSubmit={handleSearchBarSubmit}
            onResetFilters={handleResetFilters}
          />
        </div>
        <div className={styles['movies-container__item']}>
          {(requestStatus === 'success') && (
            <MovieList movies={movies} />
          )}
          {(requestStatus === 'pending') && (
            <p>loading</p>
          )}
        </div>
      </Section>
    </div>
  );
};

export default MoviesContainer;
