import AppBar from 'components/AppBar';
import Box from 'components/Box';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Box as="header">
        <AppBar />
        <hr />
      </Box>
      <Box as="main">
        <Outlet />
      </Box>
    </>
  );
}
