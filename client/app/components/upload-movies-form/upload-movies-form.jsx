import React, { useState } from 'react';

import { Row, Column, Button, Section } from '@components';

import styles from './upload-movies-form.scss';

const AddMovieForm = ({ onSubmit }) => {
  const [state, setState] = useState({});

  const handleInputFileChange = (event) => {
    setState({
      files: event.currentTarget.files,
    });
  };

  const handleSubmit = () => {
    onSubmit(state.files);
  };

  return (
    <div className={styles['upload-movies-form']}>
      <Section title="Upload your movies">
        <form encType="multipart/form-data">
          <Row spacing="s">
            <Column size="1">
              <input
                type="file"
                placeholder="Title"
                name="file"
                onChange={handleInputFileChange}
              />
            </Column>
            <Column size="1">
              <Button type="button" onClick={handleSubmit}>Upload</Button>
            </Column>
          </Row>
        </form>
      </Section>
    </div>
  )
};

export default AddMovieForm;
