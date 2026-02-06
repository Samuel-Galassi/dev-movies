import { Swiper, SwiperSlide } from 'swiper/react';
import CardPoster from '../CardPoster';
import { Container } from './styles';

const Slider = ({ info, title, type }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView="auto"
        className="swiper"
      >
        {info?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <CardPoster movie={movie} type={type} />
          </SwiperSlide>
        ))}
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Slider;
