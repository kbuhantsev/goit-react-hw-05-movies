import { Link, Outlet } from 'react-router-dom';
export default function MovieDetails() {
  return (
    <>
      <p>MovieDetails</p>
      <ul>
        <li>
          <Link to="cast">CAST</Link>
        </li>
        <li>
          <Link to="reviews">REVIEWS</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
