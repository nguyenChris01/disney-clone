import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) {
    notFound();
  }

  const decodedTerm = decodeURI(term);

  // TODO: API Call to get the searched movies
  // TODO: API Call to get the Popular Movies

  return <div>Welcome to the search page: {decodedTerm}</div>;
}

export default SearchPage;
