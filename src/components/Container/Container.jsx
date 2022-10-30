import React from 'react';
import ContainerStyled from './Container.styled';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>;
}

Container.propTypes = { children: PropTypes.node };
