import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSearchParams } from 'react-router-dom';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './SerachForm.styled';

import { SlMagnifier } from 'react-icons/sl';

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
    <FormStyled onSubmit={formik.handleSubmit}>
      <LabelStyled htmlFor="input">Film name:</LabelStyled>
      <InputStyled
        id="input"
        name="input"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input}
        placeholder="Batman"
      />
      <ButtonStyled type="submit">
        <SlMagnifier />
        Search
      </ButtonStyled>
    </FormStyled>
  );
}
