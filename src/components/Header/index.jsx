import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import Logo from '../../assets/logo.png';
import { searchMulti } from '../../services/getData';
import { getImages } from '../../utils/getImages';
import {
  ButtonSearch,
  Container,
  InputSearch,
  Li,
  Menu,
  SearchContainer,
} from './styles';

const Header = () => {
  const [backgroundScroll, setBackgroundScroll] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  const [results, setResults] = useState([]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  /* =========================
     SCROLL BACKGROUND
  ========================= */
  useEffect(() => {
    const handleScroll = () => {
      setBackgroundScroll(window.pageYOffset > 150);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* =========================
     AUTOCOMPLETE (DEBOUNCE)
  ========================= */
  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (!inputSearch.trim()) {
        setResults([]);
        return;
      }

      const data = await searchMulti(inputSearch);

      const filtered = data
        .filter(
          (item) =>
            (item.media_type === 'movie' || item.media_type === 'tv') && // só filmes/séries
            item.poster_path && // tem imagem
            (item.title || item.name), // tem nome
        )
        .slice(0, 6);

      setResults(filtered);
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [inputSearch]);

  /* =========================
     SELECIONAR ITEM
  ========================= */
  const handleSelect = (item) => {
    navigate(`/detalhe/${item.id}?type=${item.media_type}`);
    setInputSearch('');
    setResults([]);
  };

  /* =========================
     BOTÃO / ENTER
  ========================= */
  const handleSearch = () => {
    if (!results.length) return;
    handleSelect(results[0]);
  };

  /* =========================
     RENDER
  ========================= */
  return (
    <Container backgroundScroll={backgroundScroll}>
      <img src={Logo} alt="Logo Dev Movies" />

      <Menu>
        <SearchContainer>
          <InputSearch
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Buscar filme ou série..."
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />

          <ButtonSearch onClick={handleSearch}>Procurar</ButtonSearch>

          {/* AUTOCOMPLETE */}
          {results.length > 0 && (
            <div className="autocomplete">
              {results.map((item) => (
                <button
                  type="button"
                  key={`${item.media_type}-${item.id}`}
                  className="item"
                  onClick={() => handleSelect(item)}
                >
                  <img
                    src={getImages(item.poster_path)}
                    alt={item.title || item.name}
                  />

                  <span>
                    {item.title || item.name}
                    <small>
                      {item.media_type === 'movie' ? ' 🎬 Filme' : ' 📺 Série'}
                    </small>
                  </span>
                </button>
              ))}
            </div>
          )}
        </SearchContainer>

        <Li isActive={pathname === '/'} backgroundScroll={backgroundScroll}>
          <Link to="/">Home</Link>
        </Li>

        <Li
          isActive={pathname.includes('/filmes')}
          backgroundScroll={backgroundScroll}
        >
          <Link to="/filmes">Filmes</Link>
        </Li>

        <Li
          isActive={pathname.includes('/series')}
          backgroundScroll={backgroundScroll}
        >
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
};

export default Header;
