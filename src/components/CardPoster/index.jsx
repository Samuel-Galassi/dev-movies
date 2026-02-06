import { Link } from 'react-router';
import { getImages } from '../../utils/getImages';
import { Container } from './styles';

const CardPoster = ({ movie, type }) => {
  const content = (
    <Container>
      <img
        src={getImages(movie.poster_path || movie.profile_path || '')}
        alt={movie.title || movie.name || movie.original_name}
      />
      <h3>{movie.title || movie.name || movie.original_name}</h3>
    </Container>
  );

  // ✅ só filme/série navegam
  if (type === 'movie' || type === 'tv') {
    return <Link to={`/detalhe/${movie.id}?type=${type}`}>{content}</Link>;
  }

  // ❌ artista → sem link
  return content;
};

export default CardPoster;
