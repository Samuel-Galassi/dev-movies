import { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import {
  getNowPlayingMovies,
  getPopularArtists,
  getTopMovies,
  getTrendingMovies,
  getTrendingMovieToday,
  getUpcomingMovies,
} from '../../services/getData';
import { Container, SliderContainer } from './styles';

const Movies = () => {
  const [topMovies, setTopMovies] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState();
  const [trendingToday, setTrendingToday] = useState();
  const [trendingMovies, setTrendingMovies] = useState();
  const [nowPlayingMovies, setNowPlayingMovies] = useState();
  const [popularArtists, setPopularArtists] = useState();

  useEffect(() => {
    const getAllData = async () => {
      Promise.all([
        getTopMovies(),
        getUpcomingMovies(),
        getTrendingMovieToday(),
        getTrendingMovies(),
        getNowPlayingMovies(),
        getPopularArtists(),
      ])
        .then(
          ([
            topMovies,
            upcomingMovies,
            trendingToday,
            trendingMovies,
            nowPlayingMovies,
            popularArtists,
          ]) => {
            setTopMovies(topMovies);
            setUpcomingMovies(upcomingMovies);
            setTrendingToday(trendingToday);
            setTrendingMovies(trendingMovies);
            setNowPlayingMovies(nowPlayingMovies);
            setPopularArtists(popularArtists);
          },
        )
        .catch((error) => console.error(error));
    };

    getAllData();
  }, []);
  return (
    <Container>
      <h1>Todas as Categorias de Filmes</h1>

      <SliderContainer>
        {trendingToday && (
          <Slider info={trendingToday} title={'🔥 Em Alta Hoje'} type="movie" />
        )}
        {topMovies && (
          <Slider info={topMovies} title={'⭐ Top Avaliados'} type="movie" />
        )}

        {trendingMovies && (
          <Slider info={trendingMovies} title={'🎬 Populares'} type="movie" />
        )}
        {nowPlayingMovies && (
          <Slider info={nowPlayingMovies} title={'🎥 Em cartaz'} type="movie" />
        )}
        {upcomingMovies && (
          <Slider info={upcomingMovies} title={'🚀 Em Breve'} type="movie" />
        )}
        {popularArtists && (
          <Slider
            info={popularArtists}
            title={'👤 Artistas mais Populares'}
            type="person"
          />
        )}
      </SliderContainer>
    </Container>
  );
};

export default Movies;
