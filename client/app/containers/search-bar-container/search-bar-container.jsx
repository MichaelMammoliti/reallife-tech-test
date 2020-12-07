import React, { useState } from 'react';

import { SearchBar } from '@components';

const SeatchBarContainer = () => {
  const [state, setState] = useState({});

  // Async
  // ========================================
  const fetchResultsSuccess = () => {
    setState({
      ...state,
      fetchResultsRequestStatus: 'success',
    });
  };

  const fetchResultsPending = () => {
    setState({
      ...state,
      fetchResultsRequestStatus: 'pending',
    });
  };

  const fetchResultsRejected = () => {
    setState({
      ...state,
      fetchResultsRequestStatus: 'rejected',
    });
  };

  const fetchData = async () => {
    fetchResultsPending();

    const results = await fetch('api/movies/search', {
      query: {
        by: {},
        value: '',
      },
    });

    if (results) {
      fetchResultsSuccess(results);
    } else {
      fetchResultsRejected();
    }
  };

  // Events
  // ========================================
  const handleSubmit = () => {
    fetchData();
  };

  const onFieldChange = ({ name, value }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  // Render
  // ========================================
  return (
    <SearchBar
      onSubmit={handleSubmit}
      onChange={onFieldChange}
    />
  );
};

export default SeatchBarContainer;
