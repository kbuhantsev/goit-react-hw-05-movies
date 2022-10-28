import Box from 'components/Box';
import React from 'react';
import { useTheme } from 'styled-components';

export default function PageTitle({ titleText = '' }) {
  const theme = useTheme();
  return (
    <Box
      backgroundColor={theme.colors.main}
      alignItems="center"
      pt={2}
      pb={2}
      borderRadius={'normal'}
    >
      <Box as="h2">{titleText}</Box>
    </Box>
  );
}
