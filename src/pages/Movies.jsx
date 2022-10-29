import Gallery from 'components/Gallery';
import PageTitle from 'components/PageTitle';
import SearchForm from 'components/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieDatabase from 'utils/MovieDatabaseAPI';

const movieApi = new MovieDatabase();

export default function Movies() {
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      setData(null);
      return;
    }
    const findMovies = async () => {
      const data = await movieApi.searchMovie(query);
      setData(data.results);
    };
    findMovies();
  }, [searchParams, query]);

  return (
    <>
      <PageTitle titleText="Movies search" />
      <SearchForm />
      {data && <Gallery items={data} />}
    </>
  );
}
