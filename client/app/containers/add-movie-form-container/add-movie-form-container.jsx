import React, { useState } from 'react';
import { AddMovieForm } from '@components';

const AddMovieFormContainer = () => {
  const [requestStatus, setRequestStatus] = useState('not-started');
  const [formValues, setFormValues] = useState({});

  const handleOnSubmit = () => {
    setRequestStatus('pending');

    fetch('api/movies', {
      method: 'post',
      body: {
        ...formValues,
        stars: formValues.stars.split(',').map(i => i.trim()).filter(Boolean),
      },
    })
      .then(() => {
        setRequestStatus('success');
        setFormValues({});
      });
  };

  const handleChange = ({ name, value }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <AddMovieForm
      requestStatus={requestStatus}
      onChange={handleChange}
      onSubmit={handleOnSubmit}
    />
  );
};

export default AddMovieFormContainer;
