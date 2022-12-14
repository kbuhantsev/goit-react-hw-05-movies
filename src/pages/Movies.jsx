import Gallery from 'components/Gallery';
import useThemoviedb from 'components/hooks/useThemoviedb';
import PageTitle from 'components/PageTitle';
import Pagination from 'components/Pagination';
import SearchForm from 'components/SearchForm';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const { data, handlePage, setQuery } = useThemoviedb('searchMovie');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      setQuery(null);
      return;
    }
    setQuery(query);
  }, [searchParams, setQuery]);

  return (
    <>
      <PageTitle titleText="Movies search" />
      <SearchForm />
      {data && (
        <>
          <Gallery items={data.results} />
          <Pagination
            totalItems={data.total_results}
            currentPage={data?.page}
            updateCurrentPage={handlePage}
          />
        </>
      )}
    </>
  );
}
