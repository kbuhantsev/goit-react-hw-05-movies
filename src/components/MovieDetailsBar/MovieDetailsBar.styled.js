import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ListItem = styled.li``;

export const LinkStyled = styled(Link)`
  font-weight: ${p => p.theme.fontWeights.medium};
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.black};

  transition: background-color ${p => p.theme.animation.easeFast};

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  &:hover:not(.active) {
    background-color: ${p => p.theme.colors.main};
  }
`;
