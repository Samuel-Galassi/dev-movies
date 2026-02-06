import api from './api';

export const getMovies = async () => {
  const {
    data: { results },
  } = await api.get('/movie/popular');
  return results[0];
};

export const searchMulti = async (query) => {
  const {
    data: { results },
  } = await api.get('/search/multi', {
    params: { query },
  });

  return results.filter(
    (item) => item.media_type === 'movie' || item.media_type === 'tv',
  );
};

export const getTopMovies = async () => {
  const {
    data: { results },
  } = await api.get('/movie/top_rated');
  return results;
};

export const getTrendingMovies = async () => {
  const {
    data: { results },
  } = await api.get('/trending/movie/week');
  return results;
};

export const getNowPlayingMovies = async () => {
  const {
    data: { results },
  } = await api.get('/movie/now_playing');
  return results;
};

export const getUpcomingMovies = async () => {
  const {
    data: { results },
  } = await api.get('/movie/upcoming');

  return results;
};

export const getTrendingMovieToday = async () => {
  const {
    data: { results },
  } = await api.get('/trending/movie/day');
  return results;
};

export const getTopSeries = async () => {
  const {
    data: { results },
  } = await api.get('/tv/top_rated');
  return results;
};

export const getAiringToday = async () => {
  const {
    data: { results },
  } = await api.get('/tv/airing_today');
  return results;
};

export const getTrendingSeries = async () => {
  const {
    data: { results },
  } = await api.get('/trending/tv/week');
  return results;
};

export const getOnTheAirSeries = async () => {
  const {
    data: { results },
  } = await api.get('/tv/on_the_air');
  return results;
};

export const getPopularSeries = async () => {
  const {
    data: { results },
  } = await api.get('/tv/popular');
  return results;
};

export const getPopularArtists = async () => {
  const {
    data: { results },
  } = await api.get('/person/popular');
  return results;
};
export const getMovieVideos = async (movieId) => {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);
  return results;
};

export const getMovieCredits = async (movieId) => {
  const {
    data: { cast },
  } = await api.get(`/movie/${movieId}/credits`);
  return cast;
};

export const getMovieSimilar = async (movieId) => {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/similar`);
  return results;
};

export const getMovieById = async (movieId) => {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
};

export const getSeriesById = async (id) => {
  const { data } = await api.get(`/tv/${id}`);
  return data;
};

export const getSeriesVideos = async (id) => {
  const {
    data: { results },
  } = await api.get(`/tv/${id}/videos`);
  return results;
};

export const getSeriesCredits = async (id) => {
  const {
    data: { cast },
  } = await api.get(`/tv/${id}/credits`);
  return cast;
};

export const getSeriesSimilar = async (id) => {
  const {
    data: { results },
  } = await api.get(`/tv/${id}/similar`);
  return results;
};
