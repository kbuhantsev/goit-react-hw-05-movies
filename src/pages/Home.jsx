import Pagination from 'components/Pagination';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import MovieDatabase from 'utils/MovieDatabaseAPI';

const movieApi = new MovieDatabase();

export default function Home() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const total_pages = useRef(0);

  const page = searchParams.get('page');

  if (page && page !== currentPage) {
    setCurrentPage(page);
  }

  useEffect(() => {
    const getTrends = async () => {
      const data = await movieApi.getTrending(currentPage);
      console.log(data);
      total_pages.current = data.total_pages;
      setData(data.results);
    };
    getTrends();
  }, [currentPage, total_pages]);

  const updateCurrentPage = value => {
    setSearchParams({ page: value });
  };

  if (!data) return;

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <Link to={'/movies/' + item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Pagination
        totalItems={total_pages.current}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
      />
    </>
  );
}
