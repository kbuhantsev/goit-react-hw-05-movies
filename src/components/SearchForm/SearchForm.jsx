import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSearchParams } from 'react-router-dom';

export default function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const formik = useFormik({
    initialValues: {
      input: query ?? '',
    },
    onSubmit: ({ input }) => {
      setSearchParams({ query: input });
    },
    validationSchema: Yup.object({
      input: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .required('Required'),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="input">Film name:</label>
      <input
        id="input"
        name="input"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input}
        placeholder="Batman"
      />
      <button type="submit">Search</button>
    </form>
  );
}
