import Gallery from 'components/Gallery';
import useThemoviedb from 'components/hooks/useThemoviedb';
import PageTitle from 'components/PageTitle';
import Pagination from 'components/Pagination';
import SearchForm from 'components/SearchForm';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
// import MovieDatabase from 'utils/MovieDatabaseAPI';

// const movieApi = new MovieDatabase();

export default function Movies() {
  // const [data, setData] = useState(null);
  const { data, setQuery, setPage, setData } = useThemoviedb('searchMovie');
  const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query');
  // const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

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
    // console.log(serializeFormQuery());
    setSearchParams({ query, page: value });
  };

  console.log(data);

  // useEffect(() => {
  //   if (!query) {
  //     setData(null);
  //     return;
  //   }
  //   (async function () {
  //     const data = await movieApi.searchMovie(query);
  //     setData(data.results);
  //   })();
  // }, [searchParams, query]);

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
