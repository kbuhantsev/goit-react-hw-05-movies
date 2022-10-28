import Box from 'components/Box';
import NavLinkStyled from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export default function AppBar() {
  return (
    <Box as="nav">
      <Box as="ul" display="flex" flexDirection="row" gridGap="10px">
        {navItems.map(({ href, text }, idx) => (
          <li key={text}>
            {idx === 0 ? (
              <NavLinkStyled to={href} end>
                {text}
              </NavLinkStyled>
            ) : (
              <NavLinkStyled to={href}>{text}</NavLinkStyled>
            )}
          </li>
        ))}
      </Box>
    </Box>
  );
}
