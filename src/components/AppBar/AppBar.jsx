import Box from 'components/Box';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export default function AppBar() {
  return (
    <Box as="nav">
      <Box as="ul" display="flex" flexDirection="row">
        {navItems.map(({ href, text }) => (
          <li key={text}>
            <NavLink to={href}>{text}</NavLink>
          </li>
        ))}
      </Box>
    </Box>
  );
}
