import Gallery from 'components/Gallery';
import Pagination from 'components/Pagination';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieDatabase from 'utils/MovieDatabaseAPI';

const movieApi = new MovieDatabase();

export default function Home() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const total_pages = useRef(0);

  useEffect(() => {
    if (!searchParams) return;
    const page = searchParams.get('page');

    if (page && page !== currentPage) {
      setCurrentPage(page);
    } else if (!page && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [searchParams, currentPage]);

  useEffect(() => {
    const getTrends = async () => {
      const data = await movieApi.getTrending(currentPage);
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
      <Gallery items={data} />
      <Pagination
        totalItems={total_pages.current}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
      />
    </>
  );
}
