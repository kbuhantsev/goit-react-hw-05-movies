import Gallery from 'components/Gallery';
import useThemoviedb from 'components/hooks/useThemoviedb';
import PageTitle from 'components/PageTitle';
import Pagination from 'components/Pagination';
import ScrollButton from 'components/ScrollButton';
import React from 'react';

export default function Home() {
  const { data, handlePage } = useThemoviedb('trends');
  if (!data) return;

  return (
    <>
      <PageTitle titleText="Trending today" />
      <Gallery items={data.results} />
      <Pagination
        totalItems={data.total_pages}
        currentPage={data?.page}
        updateCurrentPage={handlePage}
      />
      <ScrollButton />
    </>
  );
}
