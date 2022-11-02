import Gallery from 'components/Gallery';
import PageTitle from 'components/PageTitle';
import Pagination from 'components/Pagination';
import SearchForm from 'components/SearchForm';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieDatabase from 'utils/MovieDatabaseAPI';

const movieApi = new MovieDatabase();

export default function Movies() {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const total_pages = useRef(0);

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
    (async function () {
      const data = await movieApi.searchMovie(query, page);
      total_pages.current = data.total_results;
      setData(data.results);
    })();
  }, [searchParams, query, page]);

  const updateCurrentPage = value => {
    setSearchParams({ query, page: value });
  };

  return (
    <>
      <PageTitle titleText="Movies search" />
      <SearchForm />
      {data && (
        <>
          <Gallery items={data} />
          <Pagination
            totalItems={total_pages.current}
            currentPage={Number(page)}
            updateCurrentPage={updateCurrentPage}
          />
        </>
      )}
    </>
  );
}
