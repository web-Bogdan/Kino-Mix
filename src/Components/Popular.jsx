import React from 'react';
import Loading from "../Loader/Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt} from '@fortawesome/free-solid-svg-icons'
import "../styles/Popular.scss";
import {KEY,     URL_POPULAR} from "../utils/utils";
import {Link} from "react-router-dom";
const Popular = ({isLoading, list, getFilms, setSelectedFilm, activePage, setActivePage, onClick, colorPopular}) => {
    const pagesCount = [];
    for(let i = 0; i < list.pagesCount; i++){
        if (i > 20) break;
        pagesCount.push(i+1);
    }
    React.useEffect(() => {
        setActivePage(1);
        getFilms(URL_POPULAR, KEY);
    }, []);
    return (
        <div className="Popular">
            <div className="container">
                <h2 className="Popular__title title ">Популярные фильмы <FontAwesomeIcon className='Popular__cup-icon' icon={faFireAlt}></FontAwesomeIcon> </h2>
                    {isLoading ?
                    <Loading></Loading>
                    :
                    <div className="films">
                    {list?.films?.length ? list.films.map((film, index) =>

                            <figure className="films__card" key={film + ':' + index}>
                                <Link to={"/film/id" + film.filmId} className="films__link" onClick={() => setSelectedFilm(film.filmId)}><img className="films__picture" src={film.posterUrl} alt=""/></Link>
                                <figcaption className="films__name">{film.nameRu}</figcaption>
                                <figcaption className="films__tags">{Object.values(film.genres.map(genre => genre['genre' || 0])).join(', ')}</figcaption>
                                <div className={'films__rating'} style={{'border': `2px solid ${colorPopular[(index + 1) + ((activePage - 1) * 20)] || ''}`}}>{(index + 1) + ((activePage - 1) * 20)}</div>
                            </figure>)
                        :
                        <div>нет фильма</div>
                    }
                    </div>}
                <div className="pageCount">
                    {pagesCount.length ? pagesCount.map((num, index) =>
                            <a className={activePage === num ? 'pageCount__btn pageCount__btn--active' : 'pageCount__btn'} key={num + ':' + index} href="#"  onClick={(e) => onClick(e, URL_POPULAR, num)}>{num}</a>
                        )
                        :
                        <a className="pageCount__btn pageCount__btn--active"  href="#">1</a>
                    }

                </div>
        </div>
        </div>
    );
};

export default Popular;