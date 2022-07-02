import React from 'react';
import {KEY, URL_SELECTED} from "../utils/consts";
import '../styles/Film.scss';
import {useLocation} from "react-router";

const Film = ({selectedFilm, getFilms, list}) => {
    const location = useLocation();
    const filmId = location.pathname.split("/")[2].replace("id", '');
    console.log(selectedFilm);
    React.useEffect(() => {
        window.scrollTo(0, 650);
        getFilms(URL_SELECTED, KEY, filmId);
    }, [selectedFilm]);
    return (
        <div className="film">
            <img className="film__poster" src={list.posterUrl} alt=""/>
            <div className="container">
                <div className="film__display">
                    <div className="film__picture"><img src={list.posterUrlPreview}></img></div>
                    <ul className="film__information">
                        <li className="film__item">{list.nameRu || list.nameEn || list.nameOriginal || 'Нет названия'}</li>
                        <li className="film__item">год: {list.year}</li>
                        <li className="film__item">длительность фильма: {list.filmLength} минут</li>
                        <li className="film__item">{list.countries && list.countries.length > 1 ? 'страны' : 'страна'}: {list.countries && list.countries.map(country => country['country' || 0]).join(', ')}</li>
                        <li className="film__item">жанры: {list.genres && list.genres.map(genre => genre['genre' || 0]).join(', ')}</li>
                        <li className="film__item">рейтинг: {list.ratingKinopoisk || list.ratingImdb}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Film;
