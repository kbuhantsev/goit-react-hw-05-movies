import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled, List } from './MovieDetailsBar.styled';
import PropTypes from 'prop-types';

export default function MovieDetailsBar({ navItems, backLink }) {
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
            state={{ from: backLink }}
            className={currPage === text.toLowerCase() ? 'active' : ''}
          >
            {text}
          </LinkStyled>
        </li>
      ))}
    </List>
  );
}

MovieDetailsBar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  backLink: PropTypes.object,
};
