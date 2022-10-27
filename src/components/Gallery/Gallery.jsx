import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Gallery({ items }) {
  const location = useLocation();

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={'/movies/' + item.id} state={{ from: location }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
