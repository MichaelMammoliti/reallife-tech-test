import React, { useState } from 'react';
import { UploadMoviesForm } from '@components';

const initialState = {
  uploadMovieRequestStatus: 'not-started',
};

const UploadMoviesFormContainer = () => {
  const [state, setState] = useState(initialState);

  const uploadMoviesSuccess = (response) => {
    setState({
      ...state,
      uploadMovieRequestStatus: 'success',
    });
  };

  const uploadMoviesPending = () => {
    setState({
      ...state,
      uploadMovieRequestStatus: 'pending',
    });
  };

  const uploadMoviesRejected = () => {
    setState({
      ...state,
      uploadMovieRequestStatus: 'rejected',
    });
  };

  const uploadMovies = async (files) => {
    uploadMoviesPending();

    console.log(files[0]);

    try {
      const response = await fetch('api/movies/upload', {
        method: 'POST',
        body: files[0],
      });

      if (response) {
        uploadMoviesSuccess(response);
      }
    } catch (e) {
      uploadMoviesRejected();
    }
  };

  const handleOnSubmit = (files) => {
    uploadMovies(files);
  };

  return (
    <UploadMoviesForm
      onSubmit={handleOnSubmit}
    />
  );
};

export default UploadMoviesFormContainer;
