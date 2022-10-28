import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkStyled = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.medium};
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.black};

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;

// const NavLinkStyled = styled(NavLink)(({ theme }) => ({
//   fontWeight: theme.fontWeights.medium,
//   padding: '8px 16px',
//   borderRadius: theme.radii.normal,
//   textDecoration: 'none',
//   color: theme.colors.black,
//   '&.active': {
//     color: theme.colors.white,
//     backgroundColor: theme.colors.accent,
//   },
// }));

export default NavLinkStyled;
