import Gallery from 'components/Gallery';
import useThemoviedb from 'components/hooks/useThemoviedb';
import PageTitle from 'components/PageTitle';
import Pagination from 'components/Pagination';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import MovieDatabase from 'utils/MovieDatabaseAPI';

// const movieApi = new MovieDatabase();

export default function Home() {
  const [data, setData] = useState(null);
  const { apiData, getTrending } = useThemoviedb();
  const [searchParams, setSearchParams] = useSearchParams();
  const total_pages = useRef(0);

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  // getTrending(page);

  console.log(apiData);

  // useEffect(() => {
  //   const getTrends = async () => {
  //     const data = await movieApi.getTrending(page);
  //     total_pages.current = data.total_pages;
  //     setData(data.results);
  //   };
  //   getTrends();
  // }, [page, total_pages]);

  const updateCurrentPage = value => {
    setSearchParams({ page: value });
  };

  if (!data) return;
  console.log(data);

  return (
    <>
      <PageTitle titleText="Trending today" />
      <Gallery items={data.results} />
      <Pagination
        totalItems={total_pages.current}
        currentPage={page}
        updateCurrentPage={updateCurrentPage}
      />
    </>
  );
}
