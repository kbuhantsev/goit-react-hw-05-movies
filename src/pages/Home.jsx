import Gallery from 'components/Gallery';
import useThemoviedb from 'components/hooks/useThemoviedb';
import PageTitle from 'components/PageTitle';
import Pagination from 'components/Pagination';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const { data, setPage } = useThemoviedb('trends');
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  useEffect(() => {
    setPage(page);
  }, [searchParams, page, setPage]);

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
        totalItems={data.total_pages}
        currentPage={page}
        updateCurrentPage={updateCurrentPage}
      />
    </>
  );
}
