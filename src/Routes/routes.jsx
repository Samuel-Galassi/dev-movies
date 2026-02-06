import { Route, Routes } from 'react-router';
import Detail from '../container/Detail';
import Home from '../container/Home';
import Movies from '../container/Movies';
import Series from '../container/Series';
import DefaultLayout from '../layout/DefaultLayout';

const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/detalhe/:id" element={<Detail />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Route>
    </Routes>
  );
};

export default Router;
