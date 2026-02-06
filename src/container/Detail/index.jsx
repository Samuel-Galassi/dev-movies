import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router';

import Credits from '../../components/Credits';
import Slider from '../../components/Slider';
import SpanGenres from '../../components/SpanGenres';

import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
  getSeriesById,
  getSeriesCredits,
  getSeriesSimilar,
  getSeriesVideos,
} from '../../services/getData';

import { getImages } from '../../utils/getImages';

import { Info } from '../Home/styles';
import { Background, Container, ContainerMovies, Cover } from './styles';

const Detail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const type = searchParams.get('type') || 'movie'; // movie ou tv

  const [item, setItem] = useState();
  const [videos, setVideos] = useState();
  const [credits, setCredits] = useState();
  const [similar, setSimilar] = useState();

  useEffect(() => {
    const getAllData = async () => {
      try {
        if (type === 'tv') {
          const [series, videos, credits, similar] = await Promise.all([
            getSeriesById(id),
            getSeriesVideos(id),
            getSeriesCredits(id),
            getSeriesSimilar(id),
          ]);

          setItem(series);
          setVideos(videos);
          setCredits(credits);
          setSimilar(similar);
        } else {
          const [movie, videos, credits, similar] = await Promise.all([
            getMovieById(id),
            getMovieVideos(id),
            getMovieCredits(id),
            getMovieSimilar(id),
          ]);

          setItem(movie);
          setVideos(videos);
          setCredits(credits);
          setSimilar(similar);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAllData();
  }, [id, type]);

  return (
    <>
      {item && (
        <>
          <Background image={getImages(item.backdrop_path)} />

          <Container>
            <Cover>
              <img
                src={getImages(item.poster_path)}
                alt={item.title || item.name}
              />
            </Cover>

            <Info>
              <h2 style={{ color: '#ffffff' }}>{item.title || item.name}</h2>

              <SpanGenres genres={item.genres} />

              <p>{item.overview}</p>

              <Credits credits={credits} />
            </Info>
          </Container>

          <ContainerMovies>
            {videos?.map((video) => (
              <div key={video.id}>
                <h4>{video.name}</h4>
                <iframe
                  title={video.name || `video-${video.id}`}
                  src={`https://www.youtube.com/embed/${video.key}`}
                  height="500"
                  width="100%"
                />
              </div>
            ))}
          </ContainerMovies>

          {similar && (
            <Slider
              info={similar}
              title={type === 'tv' ? 'Séries Similares' : 'Filmes Similares'}
              type={type === 'tv' ? 'tv' : 'movie'}
            />
          )}
        </>
      )}
    </>
  );
};

export default Detail;
