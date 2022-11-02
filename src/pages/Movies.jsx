import Gallery from 'components/Gallery';
import useThemoviedb from 'components/hooks/useThemoviedb';
import PageTitle from 'components/PageTitle';
import Pagination from 'components/Pagination';
import SearchForm from 'components/SearchForm';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const { data, setQuery, setPage, setData } = useThemoviedb('searchMovie');
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { query, page = 1 } = params;

  useEffect(() => {
    if (!query) {
      setData(null);
      return;
    }
    setQuery(query);
    setPage(page);
  }, [searchParams, query, page, setQuery, setPage, setData]);

  const updateCurrentPage = value => {
    setSearchParams({ query, page: value });
  };

  console.log(data);

  return (
    <>
      <PageTitle titleText="Movies search" />
      <SearchForm />
      {data && (
        <>
          <Gallery items={data.results} />
          <Pagination
            totalItems={data.total_results}
            currentPage={page}
            updateCurrentPage={updateCurrentPage}
          />
        </>
      )}
    </>
  );
}
