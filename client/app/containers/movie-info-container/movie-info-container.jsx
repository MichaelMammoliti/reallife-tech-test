import React, { useEffect, useState, useCallback } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { MovieInfo } from '@components';

const initialState = {
  requestStatus: 'not-started',
  movie: {},
};

const MovieInfoContainer = () => {
  const [state, setState] = useState(initialState);
  const { id } = useParams();

  const fetchMovieSuccess = (movie) => {
    setState({
      ...state,
      movie,
      fetchMovieRequestStatus: 'success',
    });
  };

  const fetchMoviePending = () => {
    setState({
      ...state,
      fetchMovieRequestStatus: 'pending',
    });
  };

  const fetchMovieRejected = () => {
    setState({
      ...state,
      fetchMovieRequestStatus: 'rejected',
    });
  };

  const fetchMovie = async (movieId) => {
    fetchMoviePending();

    try {
      const movie = await fetch(`/api/movies/${movieId}`);

      fetchMovieSuccess(movie);
    } catch (e) {
      fetchMovieRejected(e);
    }
  };

  const deleteMovieSuccess = () => {
    setState({
      ...state,
      deleteMovieRequestStatus: 'success',
    });
  };

  const deleteMoviePending = () => {
    setState({
      ...state,
      deleteMovieRequestStatus: 'pending',
    });
  };

  const deleteMovieRejected = () => {
    setState({
      ...state,
      deleteMovieRequestStatus: 'rejected',
    });
  };

  const deleteMovie = async (movieId) => {
    deleteMoviePending();

    try {
      const result = fetch(`/api/movies/${id}`, {
        method: 'DELETE',
      });

      if (result) {
        deleteMovieSuccess();
      }
    } catch (e) {
      deleteMovieRejected();
    }
  };

  const handleMovieInfoDeleteClick = () => {
    deleteMovie(id);
  };

  useEffect(() => {
    fetchMovie(id);
  }, []);

  const { movie, fetchMovieRequestStatus, deleteMovieRequestStatus } = state;

  return (
    <>
      {deleteMovieRequestStatus === 'success' && (
        <Redirect to="/" />
      )}

      {fetchMovieRequestStatus === 'rejected' && (
        <p>failing fetching movie</p>
      )}

      {fetchMovieRequestStatus === 'pending' && (
        <p>fetching movie</p>
      )}

      {fetchMovieRequestStatus === 'success' && (
        <MovieInfo {...movie} onDeleteClick={handleMovieInfoDeleteClick} />
      )}
    </>
  );
};

export default MovieInfoContainer;
