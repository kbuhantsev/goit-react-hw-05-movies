import AppBar from 'components/AppBar';
import Box from 'components/Box';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Suspense>
      <Box as="header">
        <AppBar />
      </Box>
      <Box as="main">
        <Outlet />
      </Box>
    </Suspense>
  );
}
