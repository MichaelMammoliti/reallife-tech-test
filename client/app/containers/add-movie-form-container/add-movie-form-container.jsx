import React, { useState } from 'react';
import { AddMovieForm } from '@components';

const AddMovieFormContainer = () => {
  const [requestStatus, setRequestStatus] = useState('not-started');
  const [formValues, setFormValues] = useState({ stars: '' });

  const handleOnSubmit = () => {
    setRequestStatus('pending');

    fetch('api/movies', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formValues,
        stars: formValues.stars.split(',').map(item => item.trim()).filter(Boolean),
      }),
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
