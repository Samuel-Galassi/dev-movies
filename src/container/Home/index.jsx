import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';
import {
  getMovies,
  getNowPlayingMovies,
  getOnTheAirSeries,
  getPopularArtists,
  getPopularSeries,
  getTopMovies,
  getTopSeries,
  getTrendingMovies,
  getTrendingSeries,
} from '../../services/getData';
import { getImages } from '../../utils/getImages';
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster,
} from './styles';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [trendingMovies, setTrendingMovies] = useState();
  const [nowPlayingMovies, setNowPlayingMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [trendingSeries, setTrendingSeries] = useState();
  const [onTheAirSeries, setOnTheAirSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [popularArtists, setPopularArtists] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getAllData = async () => {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTrendingMovies(),
        getNowPlayingMovies(),
        getTopSeries(),
        getTrendingSeries(),
        getOnTheAirSeries(),
        getPopularSeries(),
        getPopularArtists(),
      ])
        .then(
          ([
            movie,
            topMovies,
            trendingMovies,
            nowPlayingMovies,
            topSeries,
            trendingSeries,
            onTheAirSeries,
            popularSeries,
            popularArtists,
          ]) => {
            setMovie(movie);
            setTopMovies(topMovies);
            setTrendingMovies(trendingMovies);
            setNowPlayingMovies(nowPlayingMovies);
            setTopSeries(topSeries);
            setTrendingSeries(trendingSeries);
            setOnTheAirSeries(onTheAirSeries);
            setPopularSeries(popularSeries);
            setPopularArtists(popularArtists);
          },
        )
        .catch((error) => console.error(error));
    };

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie?.title}</h1>
              <p>{movie?.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assista agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>

            <Poster>
              <img src={getImages(movie.poster_path)} alt={movie.title} />
            </Poster>
          </Container>
        </Background>
      )}

      {topMovies && (
        <Slider info={topMovies} title={'Top Filmes'} type="movie" />
      )}
      {trendingMovies && (
        <Slider info={trendingMovies} title={'Filmes em Alta'} type="movie" />
      )}
      {nowPlayingMovies && (
        <Slider
          info={nowPlayingMovies}
          title={'Lançamentos Recentes'}
          type="movie"
        />
      )}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} type="tv" />}
      {trendingSeries && (
        <Slider info={trendingSeries} title={'Séries em Alta'} type="tv" />
      )}
      {onTheAirSeries && (
        <Slider info={onTheAirSeries} title={'Séries em Exibição'} type="tv" />
      )}
      {popularSeries && (
        <Slider info={popularSeries} title={'Séries Populares'} type="tv" />
      )}
      {popularArtists && (
        <Slider
          info={popularArtists}
          title={'Artistas mais Populares'}
          type="person"
        />
      )}
    </>
  );
};

export default Home;
