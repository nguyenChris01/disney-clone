type Props = {
  params: {
    id: number;
  };
  searchParams: {
    genre: string;
  };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <div>
      Welcome to the genre: {id} and name: {genre}
    </div>
  );
}

export default GenrePage;
