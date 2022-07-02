import React from 'react';
import Loading from "../components/Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {KEY, URL_BETTER} from "../utils/consts";
import {Link} from "react-router-dom";
import Input from "../components/Input";
import '../styles/Content.scss';

const Content = ({list, activePage, onClick, isLoading, getColorByRate, value, onChange, onClear, getFilms, setSelectedFilm, setActivePage, setInputValue}) => {
    const pagesCount = [];
    for(let i = 0; i < list.pagesCount; i++){
        if (i >= 20) break;
        pagesCount.push(i+1);
    }
    React.useEffect(() => {
        setActivePage(1);
        getFilms(URL_BETTER, KEY);
    }, []);
    return (
        <div className="content">
            <div className="container">
                <h2 className="popular__title title">Лучшие фильмы <FontAwesomeIcon className='Content__fire-icon' icon={faTrophy}/> </h2>
               <Input value={value} onChange={onChange} setInputValue={setInputValue} onClear={onClear}/>
                {isLoading ?
                    <Loading/>
                    :
                    <div className="films">
                    {list?.films?.length ? list.films.map((film, index) =>
                        <figure className="films__card" key={film + ':' + index}>
                            <Link  className="films__link" to={"/film/id" + film.filmId} onClick={() => setSelectedFilm(film.filmId)}><img className="films__picture" src={film.posterUrl} alt=""/></Link>
                            <figcaption className="films__name">{film.nameRu}</figcaption>
                            <figcaption className="films__tags">{Object.values(film.genres.map(genre => genre['genre' || 0])).join(', ')}</figcaption>
                            {film.rating !== "null" ? <div className="films__rating" style={{'border': `2px solid ${getColorByRate(film.rating)}`}}>{film.rating}</div> : ''}
                        </figure>)
                        :
                        <h2 className="title">Нет таких фильмов</h2>
                    }
                </div>}
                <div className="pageCount">
                    {pagesCount.length ? pagesCount.map((num, index) =>
                        <a className={activePage === num ? 'pageCount__btn pageCount__btn--active' : 'pageCount__btn'} key={num + ':' + index} href="#"  onClick={(e) => onClick(e, URL_BETTER, num)}>{num}</a>
                    )
                    :
                        <a className="pageCount__btn pageCount__btn--active" href="#">1</a>
                    }
                </div>
            </div>
        </div>
    );
};

export default Content;
