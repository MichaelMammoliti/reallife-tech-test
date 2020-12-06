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

    try {
      const formData = new FormData();
      formData.append('file', files[0]);
      const response = await window.fetch('api/movies/upload', {
        method: 'POST',
        body: formData,
      });

      if (response) {
        uploadMoviesSuccess(response);
      }
    } catch (e) {
      console.log(e);
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
