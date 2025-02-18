import Link from 'next/link';
import styles from '../styles/MovieCard.module.css';

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.card}>
      <Link href={`/movie/${movie.id}`}>
        <a>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </a>
      </Link>
    </div>
  );
};

export default MovieCard;