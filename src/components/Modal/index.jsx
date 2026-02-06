import { useEffect, useState } from 'react';
import { getMovieVideos } from '../../services/getData';
import { Background, CloseButton, Container } from './styles';

const Modal = ({ movieId, setShowModal }) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovies = async () => {
      setMovie(await getMovieVideos(movieId));
    };
    if (movieId) {
      getMovies();
    }
  }, [movieId]);
  return (
    <Background onClick={() => setShowModal(false)}>
      <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0]?.key}`}
            title="YouTube video player"
            height="500"
            width="100%"
          >
            {movieId}
          </iframe>
        </Container>
      )}
    </Background>
  );
};

export default Modal;
