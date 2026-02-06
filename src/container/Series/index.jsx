import { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import {
  getAiringToday,
  getOnTheAirSeries,
  getPopularArtists,
  getPopularSeries,
  getTopSeries,
  getTrendingSeries,
} from '../../services/getData';
import { Container, SliderContainer } from './styles';

const Series = () => {
  const [topSeries, setTopSeries] = useState();
  const [episodeToday, setEpisodeToday] = useState();
  const [trendingSeries, setTrendingSeries] = useState();
  const [onTheAirSeries, setOnTheAirSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [popularArtists, setPopularArtists] = useState();

  useEffect(() => {
    const getAllData = async () => {
      Promise.all([
        getTopSeries(),
        getAiringToday(),
        getTrendingSeries(),
        getOnTheAirSeries(),
        getPopularSeries(),
        getPopularArtists(),
      ])
        .then(
          ([
            topSeries,
            episodeToday,
            trendingSeries,
            onTheAirSeries,
            popularSeries,
            popularArtists,
          ]) => {
            setTopSeries(topSeries);
            setEpisodeToday(episodeToday);
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
    <Container>
      <h1>Todas as Categorias de Séries</h1>

      <SliderContainer>
        {topSeries && (
          <Slider info={topSeries} title={'🔥Top Séries'} type="tv" />
        )}
        {episodeToday && (
          <Slider info={episodeToday} title={'⭐ Hoje'} type="tv" />
        )}
        {trendingSeries && (
          <Slider info={trendingSeries} title={'📺Séries em Alta'} type="tv" />
        )}
        {onTheAirSeries && (
          <Slider
            info={onTheAirSeries}
            title={'🎥 Séries em Exibição'}
            type="tv"
          />
        )}
        {popularSeries && (
          <Slider
            info={popularSeries}
            title={'🎬 Séries Populares'}
            type="tv"
          />
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

export default Series;
