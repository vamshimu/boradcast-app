import React from 'react';
import './Menu.css';  


import homeImage from '../assets/home.jpg';
import moviesImage from '../assets/movies.jpg';
import tvShowsImage from '../assets/tv-shows.jpg';
import sportsImage from '../assets/sports.jpg';
import liveImage from '../assets/live.jpg';

const languageMap = {
  English: { home: "Home", movies: "Movies", tvShows: "TV Shows", sports: "Sports", live: "Live" },
  French: { home: "Accueil", movies: "Films", tvShows: "Émissions", sports: "Sports", live: "Direct" },
  German: { home: "Startseite", movies: "Filme", tvShows: "Fernsehsendungen", sports: "Sport", live: "Live" },
  Russian: { home: "Главная", movies: "Фильмы", tvShows: "Сериалы", sports: "Спорт", live: "Прямой эфир" },
  Spanish: { home: "Inicio", movies: "Películas", tvShows: "Programas", sports: "Deportes", live: "En vivo" },
  Chinese: { home: "首页", movies: "电影", tvShows: "电视剧", sports: "运动", live: "直播" }
};

const images = {
  home: homeImage,
  movies: moviesImage,
  tvShows: tvShowsImage,
  sports: sportsImage,
  live: liveImage,
};

function Menu({ language }) {
  const menuItems = languageMap[language];

  return (
    <div>
      {Object.keys(menuItems).map((key) => (
        <div key={key} className="menu-item">
          <div className="menu-image" style={{ backgroundImage: `url(${images[key]})` }}>
            <div className="menu-text">
              {menuItems[key]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
