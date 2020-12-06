import React from 'react';

import { Input, Select, Row, Column, Button, Section } from '@components';

import styles from './add-movie-form.scss';

const formats = [
  {
    text: 'DVD',
    value: 'DVD',
  },
  {
    text: 'VHS',
    value: 'VHS',
  },
  {
    text: 'Blu-Ray',
    value: 'Blu-Ray',
  },
];

const AddMovieForm = ({ onSubmit, onChange }) => (
  <div className={styles['add-movie-form']}>
    <Section title="Add A Movie">
      <form>
        <Row spacing="s">
          <Column size="1">
            <Input
              type="text"
              placeholder="Title"
              name="title"
              onChange={onChange}
            />
          </Column>
          <Column size="1">
            <Input
              type="number"
              placeholder="Release year"
              name="releaseYear"
              onChange={onChange}
            />
          </Column>
          <Column size="1">
            <Input
              type="text"
              placeholder="Stars"
              name="stars"
              onChange={onChange}
            />
          </Column>
          <Column size="1">
            <Select
              name="format"
              options={formats}
              onChange={onChange}
            />
          </Column>
          <Column size="1">
            <Button type="button" onClick={onSubmit}>Add Movie</Button>
          </Column>
        </Row>
      </form>
    </Section>
  </div>
);

export default AddMovieForm;
