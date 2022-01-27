import React from 'react';
import '../styles/Film.scss';
import {KEY, URL_SELECTED} from "../utils/utils";
const Film = ({selectedFilm, getFilms, list}) => {
    React.useEffect(() => {
        window.scrollTo(0, 650);
        getFilms(URL_SELECTED, KEY, selectedFilm);
    }, [selectedFilm]);
    return (
        <div className="Film">
            <img className="Film__poster" src={list.posterUrl} alt=""/>
            <div className="container">
                <div className="Film__display">
                    <div className="Film__picture"><img src={list.posterUrlPreview}></img></div>
                    <ul className="Film__information">
                        <li className="Film__item">{list.nameRu || list.nameEn || list.nameOriginal || 'Нет названия'}</li>
                        <li className="Film__item">год: {list.year}</li>
                        <li className="Film__item">длительность фильма: {list.filmLength} минут</li>
                        <li className="Film__item">{list.countries && list.countries.length > 1 ? 'страны' : 'страна'}: {list.countries && list.countries.map(country => country['country' || 0]).join(', ')}</li>
                        <li className="Film__item">жанры: {list.genres && list.genres.map(genre => genre['genre' || 0]).join(', ')}</li>
                        <li className="Film__item">рейтинг: {list.ratingKinopoisk || list.ratingImdb}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Film;