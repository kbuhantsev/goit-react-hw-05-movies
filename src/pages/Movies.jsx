import SearchForm from 'components/SearchForm';
// import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  // const [searchParams] = useSearchParams();

  // const query = searchParams.get('query');
  return (
    <>
      <p>Movies</p>
      <SearchForm />
    </>
  );
}
