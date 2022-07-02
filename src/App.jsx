

import Header from "./components/Header";
import axios from "axios";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {URL_BETTER, KEY, URL_SEARCH} from "./utils/consts";
import Content from "./pages/Content";
import Popular from "./pages/Popular";
import Film from "./pages/Film";
import AboutUs from "./pages/AboutUs";
import './styles/App.scss';

function App() {
    const [filmsList, setFilmsList] = React.useState([]);
    const [activePage, setActivePage] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [selectedFilm, setSelectedFilm] = React.useState(1);
    //Colors for the most popular movies
    const colorPopular = {
        1: '#f3cc14',
        2: '#c0c0c0',
        3: '#cd7f32'
    }
    // A function that gives the color of the border depending on the rating of the movie
    const getColorByRate = (vote) => {
        if (vote > 8.3){
            return 'green';
        } else if (vote > 6.1){
            return 'yellow';
        } else {
            return 'red';
        }
    }
    // Query to the server to receive movies
    const getFilms =  (url, key, value = '',
                       headers= {
                        'X-API-KEY': key,
                        'Content-type': 'application/json'
                        } ) => {
                        setIsLoading(true);
                        axios(url + value, {
                            headers: headers,
                         })
                        .then(response => setFilmsList(response.data))
                        .then(() => setIsLoading(false));
    }
    //  Change page buttons
    const changePage = (e, url, number) => {
        e.preventDefault();
        getFilms(url, KEY, number);
        window.scrollTo(0, 650);
        setActivePage(number);
    }
    const setInputValue = (value) => {
        setSearchValue(value);
    }
    // Search from input
    const searchQuery = (e) => {
        e.preventDefault();
        setInputValue(searchValue);
        if (searchValue?.trim() === ''){
                getFilms(URL_BETTER, KEY, activePage);
        } else{
            getFilms(URL_SEARCH, KEY, searchValue);
        }
    }
    const onClear = () => {
        setSearchValue('');
        getFilms(URL_BETTER, KEY);
    }
    // Get random film from the server
    const randomFilm = (e, min = 1, max = 65427) => {
        const randomFilm = Math.floor(Math.random() * (max - min)) + min
        setSelectedFilm(randomFilm);
    }

  return (
    <div className="App">
        <BrowserRouter>
            <Header onClick={randomFilm} selectedFilm={selectedFilm}/>
            <Routes>
                <Route exact path={"/"} element={ <Content list={filmsList} activePage={activePage} setActivePage={setActivePage} onClick={changePage} isLoading={isLoading} getFilms={getFilms} getColorByRate={getColorByRate} value={searchValue} onChange={searchQuery} setSelectedFilm={setSelectedFilm} setInputValue={setInputValue} onClear={onClear}/>}/>
                <Route  path={"/popular"} element={ <Popular list={filmsList} isLoading={isLoading} colorPopular={colorPopular} getFilms={getFilms} setSelectedFilm={setSelectedFilm} activePage={activePage} setActivePage={setActivePage} onClick={changePage}/>}/>
                <Route  path={"/film/:id"} element={ <Film list={filmsList} selectedFilm={selectedFilm} getFilms={getFilms}/>}/>
                <Route  path={"/about"} element={ <AboutUs/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
