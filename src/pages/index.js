import { fetchMovies } from '../utils/api';
import MovieCard from '../components/MovieCard';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const movies = await fetchMovies();
  return {
    props: {
      movies,
    },
  };
}

export default function Home({ movies }) {
  return (
    <div className={styles.container}>
      <h1>Popular Movies</h1>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}