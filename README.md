# 🍿 DevMovies — Application TMDB Front-End

![Status](https://img.shields.io/badge/status-%20desenvolvido-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TMDB API](https://img.shields.io/badge/TMDB_API-01D277?style=for-the-badge)

Este repositório contém o **front-end da aplicação DevMovies**, uma interface web para explorar filmes, séries e artistas usando a **API do The Movie Database (TMDB)**.

O projeto foi desenvolvido em **React com Vite**, com foco em:
✅ consumo de API REST  
✅ rotas dinâmicas  
✅ carrosséis com Swiper  
✅ busca com autocomplete  
✅ boas práticas de front-end e componentização

---

## 🔗 Demonstração

🌐 App em produção:  
https://dev-movies-nine.vercel.app

---

## 🛠️ Tecnologias utilizadas

- React.js  
- Vite  
- JavaScript (ES6+)  
- Styled-Components  
- React Router (para navegação de páginas)  
- Axios (para requisições à API)  
- Swiper (carrosséis interativos)  
- The Movie Database (TMDB) API (dados reais de filmes e séries)

---

## 🧠 Objetivos do projeto

- Construir uma SPA (aplicação de página única) moderna e dinâmica  
- Consumir dados reais da API TMDB  
- Criar páginas de listagem de filmes, séries e artistas  
- Implementar busca com autocomplete em tempo real  
- Criar página de detalhes com trailers, elenco e conteúdos similares  
- Aplicar boas práticas de organização e estilo com styled-components

---

## 📂 Estrutura do projeto

```bash
📦 dev-movies
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┣ 📂 components
 ┃ ┃ ┣── CardPoster
 ┃ ┃ ┣── Credits
 ┃ ┃ ┣── Header
 ┃ ┃ ┣── Slider
 ┃ ┃ ┗── SpanGenres
 ┃ ┣ 📂 container
 ┃ ┃ ┣── Home
 ┃ ┃ ┣── Movies
 ┃ ┃ ┣── Series
 ┃ ┃ ┗── Detail
 ┃ ┣ 📂 services
 ┃ ┃ ┗── getData.js
 ┃ ┣ 📂 utils
 ┃ ┣ 📂 styles
 ┃ ┗── App/routes & entry files
 ┣ 📜 package.json
 ┣ 📜 vite.config.js
 ┗ 📜 README.md
