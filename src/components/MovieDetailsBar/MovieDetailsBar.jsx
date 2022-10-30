import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled, List } from './MovieDetailsBar.styled';

export default function MovieDetailsBar({ navItems }) {
  const location = useLocation();

  const { pathname } = location;

  let currPage = pathname.split('/');
  currPage = currPage[currPage.length - 1].toLowerCase();

  return (
    <List>
      {navItems.map(({ href, text }) => (
        <li key={text}>
          <LinkStyled
            to={href}
            className={currPage === text.toLowerCase() ? 'active' : ''}
          >
            {text}
          </LinkStyled>
        </li>
      ))}
    </List>
  );
}
