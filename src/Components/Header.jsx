import React from 'react';
import '../styles/Header.scss';
import {Link} from "react-router-dom";
const Header = ({onClick, selectedFilm}) => {
    return (
            <header className='Header'>
                <div className="container">
                <Link className="Header__logo" to="/">КиноМикс</Link>
                <nav className="navbar">
                    <ul className="navbar__menu">
                        <li><Link className="navbar__link" to="/" >лучшее</Link></li>
                        <li><Link className="navbar__link" to="/popular" >популярное</Link></li>
                        <li><Link className="navbar__link" to={"/film/id" + selectedFilm}  onClick={onClick}>случайный фильм</Link></li>
                        <li><Link className="navbar__link" to="/about" >о нас</Link></li>
                    </ul>
                </nav>
                </div>
            </header>
    );
};

export default Header;