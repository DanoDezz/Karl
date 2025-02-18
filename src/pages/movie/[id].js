import { useRouter } from 'next/router';
import { fetchMovieDetails } from '../../utils/api';
import VideoPlayer from '../../components/VideoPlayer';
import styles from '../../styles/MovieDetail.module.css';

export async function getServerSideProps({ params }) {
  const movie = await fetchMovieDetails(params.id);
  return {
    props: {
      movie,
    },
  };
}

export default function MovieDetail({ movie }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <VideoPlayer tmdbId={id} />
    </div>
  );
}