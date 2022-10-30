import Box from 'components/Box';
import React from 'react';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';

export default function PageTitle({ titleText = '' }) {
  const theme = useTheme();
  return (
    <Box
      backgroundColor={theme.colors.main}
      alignItems="center"
      pt={2}
      pb={2}
      mt={4}
      borderRadius={'normal'}
    >
      <Box as="h2">{titleText}</Box>
    </Box>
  );
}

PageTitle.propTypes = { titleText: PropTypes.string };
