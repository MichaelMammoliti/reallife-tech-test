import React, { useState } from 'react';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { MovieList, Section, SearchBar } from '@components';

import styles from './movies-container.scss';

const FETCH_MOVIES = gql`
  query movies($filters: MovieFilters) {
    movies(filters: $filters) {
      title
    }
  }
`;

const MoviesContainer = () => {
  const fetchMoviesQueryPayload = useQuery(FETCH_MOVIES, {
    variables: {
      filters: {
        title: 'michael',
      },
    },
  });

  const [state, setState] = useState({
    searchType: 'star',
  });

  // const fetchMoviesPending = () => {
  //   setState({
  //     ...state,
  //     requestStatus: 'pending',
  //   });
  // };

  // const fetchMoviesSuccess = (movies) => {
  //   setState({
  //     ...state,
  //     requestStatus: 'success',
  //     movies,
  //   });
  // };

  // const fetchMoviesRejected = () => {
  //   setState({
  //     ...state,
  //     requestStatus: 'rejected',
  //   });
  // };

  // const fetchMovies = async () => {
  //   fetchMoviesPending();

  //   const movies = fetchMoviesQuery({
  //     variables: {
  //       filters: {},
  //     },
  //   });

  //   if (movies) {
  //     fetchMoviesSuccess(movies);
  //   } else {
  //     fetchMoviesRejected();
  //   }
  // };

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

  return (
    <div className={styles['movies-container']}>
      <Section title="Your Movies">
        <div className={styles['movies-container__item']}>
          <SearchBar
            onSelectChange={handleSearchBarChange}
            onInputChange={handleSearchBarChange}
            onSubmit={handleSearchBarSubmit}
          />
        </div>
        <div className={styles['movies-container__item']}>
          {(!fetchMoviesQueryPayload.loading && fetchMoviesQueryPayload.data) && (
            <MovieList movies={fetchMoviesQueryPayload.data} />
          )}
          {(fetchMoviesQueryPayload.loading) && (
            <p>loading</p>
          )}
        </div>
      </Section>
    </div>
  );
};

export default MoviesContainer;
